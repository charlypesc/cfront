import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { observable } from 'rxjs';
import { Reuniones } from 'src/app/models/reuniones';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { LoginService } from 'src/app/services/login.service';
import { ReunionesService } from 'src/app/services/reuniones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reu-paso-uno',
  templateUrl: './reu-paso-uno.component.html',
  styleUrls: ['./reu-paso-uno.component.css']
})
export class ReuPasoUnoComponent implements OnInit {
profesional:string;
datosReuniones:FormGroup;
rutBusca:string;
rutBuscaResponse:number;
tipoReunionObj:string;
faTimes=faTimes;
faCheckCircle=faCheckCircle
  constructor(private router:Router,
              private fb:FormBuilder,
              private loginService:LoginService,
              private estudianteService:EstudianteService,
              private reunionesService:ReunionesService
  ) 
  {
    this.rutBuscaResponse=0
    this.datosReuniones=this.fb.group({
      tipoReunion:['', Validators.required],
      rut:['', Validators.required],
      fecha:['',Validators.required],
      asunto:['',Validators.required]
    })
   }

  ngOnInit(): void {
    
    this.profesional = this.loginService.getTokenDecoded().sub;
  }

// V E R I F I C A     R U T 
changeFn(e){
  this.tipoReunionObj=e;
}
  verificaRut(){
    this.rutBusca=this.datosReuniones.get('rut').value
    this.estudianteService.getEstudianteByRut(this.rutBusca).subscribe(data=>{
      if(data.codigo!=null){
        this.rutBuscaResponse=1;
       
      }else{
        this.rutBuscaResponse=2;
        console.log(data)
      }
      
    })
  }
//G U A R D A    R E U N I O N
guardaReunion(){
  const reunion: Reuniones={
    profesional:this.loginService.getTokenDecoded().sub,
    asunto:this.datosReuniones.value.asunto,
    fecha:this.datosReuniones.value.fecha,
    rbd:this.loginService.getTokenDecoded().Rbd,
    tipoReunion:this.tipoReunionObj,
    rutAsociado:this.datosReuniones.value.rut,
    activo:1,
    tipo:'Reunion',
    usuarioId:this.loginService.getTokenDecoded().idUsuario
    }
    console.log(reunion)
    this.reunionesService.saveReunion(reunion).subscribe(data=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El Registro ha sido guardado exitosamente..',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(data)
        this.router.navigate(['/dashboard/reuniones/reupasodos/'+ data.reunionId])
    })
  }

}
