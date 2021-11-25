import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Registro } from 'src/app/models/registro';
import { ParticipanteReg } from 'src/app/models/participanteReg';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { LoginService } from 'src/app/services/login.service';
import { RegistroService } from 'src/app/services/registro.service';
import { RutParticipanteService } from 'src/app/services/rut-participante.service';

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
  
  // stringifiedData: any; 

  numRut:string;
  datosRegFaltantes:FormGroup;
  listParticipantes: ParticipanteReg[]=[]


  constructor(private fb:FormBuilder,
              private registroService: RegistroService,
              private estudianteService: EstudianteService,
              private arrayRutParticipantesService: RutParticipanteService,
              private toastr: ToastrService,
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
  }



  saveRegistro():void{
    const arrayRuts= this.arrayRutParticipantesService.arrayRutParticipante
    const arrayPart: ParticipanteReg[] = []
    
    
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
    
    this.acuerdos=this.datosRegFaltantes.value.acuerdos;
    
    
    const registro: Registro={
      asunto:this.datosRegFaltantes.value.asunto,
      fecha:this.datosRegFaltantes.value.fecha,
      profesional:this.profesional,
      antecedentes:this.datosRegFaltantes.value.antecedentes,
      acuerdos:this.datosRegFaltantes.value.acuerdos,
      //hardcode
      usuarioId:15,
      participanteReg:arrayPart
    }

    this.registroService.guardarRegistro(registro).subscribe(data=>{
      this.toastr.success('El registro ha sido ingresado correctamente, Registro guardado')
    }, error =>{
      this.toastr.error('Algo salio mal, contacta al Admin del Sistema')
    });

  }

}
