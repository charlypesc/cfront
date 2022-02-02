import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipanteReg } from 'src/app/models/participanteReg';
import { ProtocoloReu } from 'src/app/models/protocoloReu';
import { Reuniones } from 'src/app/models/reuniones';
import { TematicasReg } from 'src/app/models/tematicasReg';
import { TematicasReu } from 'src/app/models/tematicaReu'
import { LoginService } from 'src/app/services/login.service';
import { ReunionesService } from 'src/app/services/reuniones.service';
import { TematicasService } from 'src/app/services/tematicas.service';
import Swal from 'sweetalert2';
import { ProtocolosService } from 'src/app/services/protocolos.service';
import { ParticipanteManual } from 'src/app/models/participanteManual';
import { ParticipantesManualService } from 'src/app/services/participantes-manual.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CambiarPasswordComponent } from '../../cambiar-password/cambiar-password.component';

@Component({
  selector: 'app-reu-paso-dos',
  templateUrl: './reu-paso-dos.component.html',
  styleUrls: ['./reu-paso-dos.component.css']
})
export class ReuPasoDosComponent implements OnInit {
  rbd:string;
  idParam:number;
  datosPasoUno:any=[]
  rutManual:string;
  nombreManuel:string;
  lstStaticData:any;
  selectTematicas:any; //se carga el array y tambien se evalua desde el form (valido o no)
  tematicasReg:any;
  datosForm:FormGroup;
  protocoloDataForm:any=0; //se carga propiedad para ser evaluada desde el form (valido o no)


  constructor(private aRoute:ActivatedRoute,
              private protocolosService:ProtocolosService,
              private reunionesService:ReunionesService,
              private tematicasService:TematicasService,
              private participanteManualService:ParticipantesManualService,
              private loginService:LoginService,
              private fb:FormBuilder,
              private router:Router
    ) {
      this.datosForm=this.fb.group({
        antecedentes:['', Validators.required],
        acuerdos:['', Validators.required]
      })
      var idReunion = this.aRoute.snapshot.paramMap.get('reunionId');
      this.idParam=parseInt(idReunion);
      
   }

  ngOnInit() {
    this.rbd = this.loginService.getTokenDecoded().Rbd;
    this.getReunion();
    this.selectTematicas=null
    
  }
  getReunion(){
    this.reunionesService.getReunionById(this.idParam).subscribe(data=>{
      this.datosPasoUno=data
      
      console.log("datos")
      console.log(data)
    })
  }

  guardarReunion(){
    console.log("empezando a guardar")
    
    const arrayTematicas: TematicasReu[] = []
    const arrayTematicasDef= this.tematicasService.lstDataTematica
    const arrayProtocolos:ProtocoloReu[]=[]
    const arrayProtocolosService=this.protocolosService.lstProtocolosData;
    const arrayParticipantesManual=this.participanteManualService.lstParticipanteManual
    
    
    console.log(arrayTematicasDef)
    if(arrayTematicasDef==undefined){
      Swal.fire('Debes ingresar una temática!')

    }
    if(arrayProtocolosService==undefined){
      Swal.fire('Debes ingresar un protocolo!')  
    }
    if(arrayParticipantesManual==undefined){
      Swal.fire('Debes ingresar al menos un participante!')
    } 
    else{
      
    //T E M A T I C A S
    for(let i=0; i < arrayTematicasDef.length;i++){
      const arr: TematicasReu = new TematicasReu()
      arr.tematica=arrayTematicasDef[i].tematica
      arr.rbd=arrayTematicasDef[i].rbd
      arrayTematicas.push(arr)
    }

    console.log("T E M A T I C A ")
    console.log(arrayTematicas)

    // L I S T A -- P R O T O C O L O S

      for(let p=0; p < arrayProtocolosService.length;p++){
        const arrp: ProtocoloReu = new ProtocoloReu()
        
        arrp.nombreProtocolo=arrayProtocolosService[p].nombreProtocolo
        arrp.descripcionProtocolo=arrayProtocolosService[p].descripcionProtocolo
        arrayProtocolos.push(arrp);

      }
      console.log('P R O T O C O L O S')
      console.log(arrayProtocolos)

      //L I S T A    P A R T I C I P A N T E S   M A N U A L

      
      const reunion: Reuniones={
        id:this.datosPasoUno[0].id,
        profesional:this.datosPasoUno[0].profesional,
        asunto:this.datosPasoUno[0].asunto,
        fecha:this.datosPasoUno[0].fecha,
        rbd:this.datosPasoUno[0].rbd,
        antecedentes:this.datosForm.value.antecedentes,
        acuerdos:this.datosForm.value.acuerdos,
        tipoReunion:this.datosPasoUno[0].reunion,
        rutAsociado:this.datosPasoUno[0].rutAsociado,

        usuarioId:this.datosPasoUno[0].usuarioId,
        activo:1,
        tipo:this.datosPasoUno[0].tipo,
        tematicasReu:arrayTematicas,
        protocoloReu:arrayProtocolos,
        participanteManual:arrayParticipantesManual
       

      }
      console.log(reunion)
      this.reunionesService.actualizaReunion(reunion).subscribe(data=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'La reunion ha sido guardado exitosamente..',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['dashboard/reuniones/reupasotres/'+data.ReunionId])
      },error=>console.log("upsi"));
      
    }

      


  }


}
