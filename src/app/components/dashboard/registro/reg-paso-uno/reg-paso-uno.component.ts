import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-reg-paso-uno',
  templateUrl: './reg-paso-uno.component.html',
  styleUrls: ['./reg-paso-uno.component.css']
})
export class RegPasoUnoComponent implements OnInit {
  usuario:string;
  datosRegistro:FormGroup;
  constructor(private loginService: LoginService,
              private fb:FormBuilder,
              private router: Router,
              private registroService: RegistroService ) {

                this.datosRegistro = this.fb.group({
                  profesional:[''],
                  asunto:['', Validators.required],
                  fecha:['', Validators.required]
                })


               }

  ngOnInit(): void {
    this.getUsuario();
  }

  pasoUno():void{
    
    this.router.navigate(['/dashboard/registro/regPasoDos'])
    this.registroService.fecha=this.datosRegistro.value.fecha;
    this.registroService.asunto=this.datosRegistro.value.asunto;
    this.registroService.profesional=this.usuario;

  }
  getUsuario():void{
    this.loginService.getTokenDecoded();
    console.log(this.loginService.getTokenDecoded())
    this.usuario = this.loginService.getTokenDecoded().sub;
  }
}
