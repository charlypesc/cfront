import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
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
  numRut:string;
  datosRegFaltantes:FormGroup;
  constructor(private fb:FormBuilder,
              private registro: RegistroService,
              private estudianteService: EstudianteService,
              private arrayRutParticipantes: RutParticipanteService ) {
                this.datosRegFaltantes=this.fb.group({
                  profesional:[this.registro.profesional, Validators.required],
                  asunto:[this.registro.asunto, Validators.required],
                  fecha:[this.registro.fecha, Validators.required],
                  antecedentes:['', Validators.required],
                  acuerdos:['', Validators.required]
                })  
               }

  ngOnInit(): void {
    this.profesional=this.registro.profesional;
    this.asunto=this.registro.asunto;
    this.fecha=this.registro.fecha;
    

  }



  saveRegistro(){
    console.log('desde el servicio a componente B')
    console.log(this.arrayRutParticipantes.arrayRutParticipante)
  }

}
