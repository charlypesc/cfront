import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Registro } from 'src/app/models/registro';
import { ParticipanteReg } from 'src/app/models/participanteReg';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { LoginService } from 'src/app/services/login.service';
import { RegistroService } from 'src/app/services/registro.service';
import { RutParticipanteService } from 'src/app/services/rut-participante.service';
import { ProtocolosService } from 'src/app/services/protocolos.service';
import { ProtocolosActuacion } from 'src/app/models/protocolosActuacion';
import { DataStorage } from 'src/app/models/dataStorage';
import { CreatePdfService } from 'src/app/services/create-pdf.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Tematicas } from 'src/app/models/tematicas';
import { TematicasReg } from 'src/app/models/tematicasReg';
import { TematicasService } from 'src/app/services/tematicas.service';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reg-paso-dos',
  templateUrl: './reg-paso-dos.component.html',
  styleUrls: ['./reg-paso-dos.component.css']
})
export class RegPasoDosComponent implements OnInit {
  profesional:string;
  usuarioId:number;
  rbd: string;
  asunto:string;
  fecha:Date;
  antecedentes:string;
  acuerdos:string;
  registro: any;
  idProtocolo:number;
  html:any;
  loading:boolean=false;
  tematicaPedagogica:any
  pedagogico:any
  lstStaticData:any;
  selectTematicas:number[];
  
  @ViewChild ('registro')registroPdf:ElementRef;

  numRut:string;
  datosRegFaltantes:FormGroup;
  listParticipantes: ParticipanteReg[]=[]
  protocolos:any=[];
  temporalProtocolos:Array<any>=[]
  tematicasReg:any;
  numeroFolio:number;

  constructor(private fb:FormBuilder,
              private registroService: RegistroService,
              private estudianteService: EstudianteService,
              private arrayRutParticipantesService: RutParticipanteService,
              private toastr: ToastrService,
              private protocolosService: ProtocolosService,
			        private loginService:LoginService,
              private createPdfService: CreatePdfService,
              private router:Router, 
              private tematicasService:TematicasService) 
				      {
                this.datosRegFaltantes=this.fb.group({
                  profesional:[this.profesional],
                  asunto:[''],
                  fecha:['', Validators.required],
                  antecedentes:['',Validators.required],
                  acuerdos:['']
                })  
               }

  ngOnInit(): void 

  {
    this.fecha=this.registroService.fecha;
	  this.profesional = this.loginService.getTokenDecoded().name;
    this.rbd = this.loginService.getTokenDecoded().Rbd;
    this.usuarioId=this.loginService.getTokenDecoded().idUsuario;
    this.buscarProtocolos();
    this.cargarTematicas();
    
    this.registroService.searchFolio(this.rbd).subscribe(data=>{
      this.numeroFolio=data;
    })
    this.selectTematicas = new Array <number>();
    
  }
// - - - - - M E T O D O S   T  E M A T I C A S - - - - - 
  cargarTematicas(){
    this.tematicasService.getTematicas(this.rbd).subscribe(data=>{
      this.lstStaticData=data;
    })
  }
  getTematicaId(e:any, id:number, tematica:string)

  {
    if(e.target.checked)
    {
      console.log(id + 'checked')
      this.selectTematicas.push(id)
      this.createTematicaObj(id);
    }else
    {
      console.log(id + 'UnChecked')

      //LOGICA: metodo crea un nuevo array que llena con elementos provistas por la funcion (funcion no llena el array con el elemento coincidente)
      this.selectTematicas = this.selectTematicas.filter(m=>m!=id)
      this.createTematicaObj(id)
    }
    console.log(this.selectTematicas)
  }
  createTematicaObj(id:number){
    const arrayTematicasObj:TematicasReg[]=[]

    for (let index = 0; index < this.selectTematicas.length; index++) {
      const arrayTematicas : TematicasReg = new TematicasReg()
      arrayTematicas.tematica=this.lstStaticData[index].tematica
      arrayTematicas.numeroId=this.lstStaticData[index].id
      arrayTematicas.rbd=this.lstStaticData[index].rbd
      arrayTematicasObj.push(arrayTematicas)
    }
    this.tematicasReg=arrayTematicasObj;
  }
  //- - - - -  M E T O D O S    P R O T O C O L O S - - - - - 
  
  buscarProtocolos()//Protocolos paso 1: trae los protocolos de la api
    {
      return this.protocolosService.getProtocolos(this.rbd).subscribe(data=>{
        this.protocolos = data;
      console.log(this.protocolos)
      }, error=>{
        this.toastr.error('No podemos encontrar los protocolos','No hay protocolos ingresados?')
      })
    }

  changeFn(e)//Protocolos paso 2; del evento del select, pasa el valor Id a la funcion y carga el idProtocolo que ha sido seleccionado 
    {
      this.idProtocolo = e;
    }
  
  protocolosArrayTemporal() //protocolos paso 3 se crea el array temporal con los protocolos seleccionados
    {
        this.temporalProtocolos.push(this.protocolos[this.idProtocolo])
    }
  eliminaProtocolo(inde:number):void//protocolos eliminar del array
    {
      this.temporalProtocolos.splice(inde,inde+1);
    }

// -------- M E T O D O S   G U A R D A    R E G I S T R O  ------- 
  saveRegistro():void
  {

            const arrayRuts= this.arrayRutParticipantesService.arrayRutParticipante
            const arrayPart: ParticipanteReg[] = []
            const protocolosDef: ProtocolosActuacion[]=[]
          
            // L I S T A -- P A R T I C I P A N T E S
            for(let i=0; i < arrayRuts.length;i++){
              const arrayParticipantes: ParticipanteReg = new ParticipanteReg()
              arrayParticipantes.rut=arrayRuts.controls[i].value.run;
              arrayParticipantes.nombreParticipante=arrayRuts.controls[i].value.nombre
              arrayParticipantes.fechaIngreso=this.datosRegFaltantes.value.fecha
              arrayParticipantes.asunto=this.datosRegFaltantes.value.asunto;
              arrayParticipantes.activo=1;
              arrayParticipantes.rbd=this.rbd;
              arrayParticipantes.usuarioId=this.usuarioId;
              arrayPart.push(arrayParticipantes)
            }

          // L I S T A -- P R O T O C O L O S

            for(let p=0;p<this.temporalProtocolos.length;p++){
            const arrayProtocolos: ProtocolosActuacion = new ProtocolosActuacion()
            arrayProtocolos.nombreProtocolo=this.temporalProtocolos[p].nombreProtocolo
            arrayProtocolos.descripcionProtocolo=this.temporalProtocolos[p].descripcionProtocolo
            protocolosDef.push(arrayProtocolos);
          }
            
            this.acuerdos=this.datosRegFaltantes.value.acuerdos;
            console.log('P R O T O C O L O S')
            console.log(protocolosDef)

          // R E G I S T R O - - - C O M P L E T O

            const registro: Registro={
              asunto:this.datosRegFaltantes.value.asunto,
              fecha:this.datosRegFaltantes.value.fecha,
              profesional:this.profesional,
              antecedentes:this.datosRegFaltantes.value.antecedentes,
              acuerdos:this.datosRegFaltantes.value.acuerdos,
              usuarioId:this.usuarioId,
              rbd:this.rbd,
              folio:this.numeroFolio +1,
              participanteReg:arrayPart,
              protocoloReg:protocolosDef,
              tematicasReg:this.tematicasReg
            }
            this.registroService.guardarRegistro(registro).subscribe(data=>{
              
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El Registro ha sido guardado exitosamente..',
                showConfirmButton: false,
                timer: 3000
              })
              this.router.navigate(['/dashboard/busqueda/busqregpasotres/'+data.numeroRegistro+'/'+false])
            }, error =>{
              this.toastr.error('Algo salio mal, contacta al administrador del sistema')
            });

  }


}
