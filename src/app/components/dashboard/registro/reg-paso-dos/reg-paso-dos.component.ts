import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-reg-paso-dos',
  templateUrl: './reg-paso-dos.component.html',
  styleUrls: ['./reg-paso-dos.component.css']
})
export class RegPasoDosComponent implements OnInit {
  profesional:string;
  asunto:string;
  fecha:Date;
  antecedentes:string;
  acuerdos:string;
  usuarioId:number;
  registro: any;
  idProtocolo:number;
  
  // stringifiedData: any; 

  numRut:string;
  datosRegFaltantes:FormGroup;
  listParticipantes: ParticipanteReg[]=[]
  rbd: string = '7647-3'
  protocolos:any=[];
  temporalProtocolos:Array<any>=[]

  constructor(private fb:FormBuilder,
              private registroService: RegistroService,
              private estudianteService: EstudianteService,
              private arrayRutParticipantesService: RutParticipanteService,
              private toastr: ToastrService,
              private protocolosService: ProtocolosService,
			        private loginService:LoginService) 
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
    
    this.asunto=this.registroService.asunto;
    this.fecha=this.registroService.fecha;
	  this.profesional = this.loginService.getTokenDecoded().sub;
this.buscarProtocolos();
    
  }
  //Protocolos paso 1: trae los protocolos de la api
  buscarProtocolos(){
    return this.protocolosService.getProtocolos(this.rbd).subscribe(data=>{
      this.protocolos = data;
	  console.log(this.protocolos)
    }, error=>{
      this.toastr.error('No podemos encontrar los protocolos','No hay protocolos ingresados?')
    })
  }
//Protocolos paso 2; del evento del select, pasa el valor Id a la funcion y carga el idProtocolo que ha sido seleccionado
  changeFn(e) {
    this.idProtocolo = e;
}
//protocolos paso 3 se crea el array temporal con los protocolos seleccionados
	protocolosArrayTemporal(){

	this.temporalProtocolos.push(this.protocolos[this.idProtocolo])
	console.log(this.temporalProtocolos)

}

//protocolos eliminar del array
eliminaProtocolo(inde:number):void{
  console.log('llegando')
  console.log(inde)
  
  this.temporalProtocolos.splice(inde,inde+1);
  console.log(this.temporalProtocolos)
  
}


  saveRegistro():void{
    const arrayRuts= this.arrayRutParticipantesService.arrayRutParticipante
    const arrayPart: ParticipanteReg[] = []
    const protocolosDef: ProtocolosActuacion[]=[]
    
    for(let i=0; i < arrayRuts.length;i++){
      const arrayParticipantes: ParticipanteReg = new ParticipanteReg()
	  	arrayParticipantes.rut=arrayRuts.controls[i].value.run;
		  arrayParticipantes.nombreParticipante=arrayRuts.controls[i].value.nombre
		  arrayParticipantes.fechaIngreso=this.fecha
      arrayParticipantes.asunto=this.asunto;
      arrayParticipantes.activo=1;
      //hardcode
      arrayParticipantes.usuarioId=15;
      arrayPart.push(arrayParticipantes)
    }

for(let p=0;p<this.temporalProtocolos.length;p++){
  const arrayProtocolos: ProtocolosActuacion = new ProtocolosActuacion()
  arrayProtocolos.nombreProtocolo=this.temporalProtocolos[p].nombreProtocolo
  arrayProtocolos.descripcionProtocolo=this.temporalProtocolos[p].descripcionProtocolo
  protocolosDef.push(arrayProtocolos);
}
    
    this.acuerdos=this.datosRegFaltantes.value.acuerdos;
    
    
    const registro: Registro={
      asunto:this.datosRegFaltantes.value.asunto,
      fecha:this.datosRegFaltantes.value.fecha,
      profesional:this.profesional,
      antecedentes:this.datosRegFaltantes.value.antecedentes,
      acuerdos:this.datosRegFaltantes.value.acuerdos,
      //hardcode
      usuarioId:15,
      participanteReg:arrayPart,
      protocoloReg:protocolosDef
    }
console.log(registro)
    this.registroService.guardarRegistro(registro).subscribe(data=>{
      this.toastr.success('El registro ha sido ingresado correctamente, Registro guardado')
    }, error =>{
      this.toastr.error('Algo salio mal, contacta al Admin del Sistema')
    });

  }

}
