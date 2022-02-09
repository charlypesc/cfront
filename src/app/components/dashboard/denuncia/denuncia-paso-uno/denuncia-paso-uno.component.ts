import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Denuncia } from 'src/app/models/denuncia';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-denuncia-paso-uno',
  templateUrl: './denuncia-paso-uno.component.html',
  styleUrls: ['./denuncia-paso-uno.component.css']
})
export class DenunciaPasoUnoComponent implements OnInit {


datosDenuncia:FormGroup;
usuario:string;
rutBuscaResponse:number;
rutBusca:string;
datoRut:any;
faTimes=faTimes;
faCheckCircle=faCheckCircle

  constructor(private fb:FormBuilder,
              private loginService:LoginService,
              private denunciaService:DenunciaService,
              private estudianteService:EstudianteService,
              private toastr:ToastrService,
              private router:Router) {
    this.datosDenuncia=this.fb.group({
      organismo:['', Validators.required],
      folioRit:['', Validators.required],
      rutAsociado:['', Validators.required],
      fechaAsignada:['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.getUsuario();
  }

  pasoUno(){
    console.log(this.datosDenuncia)
  }
  changeFn(e){
    this.datosDenuncia.controls.organismo.setValue(e)
  }
//
reset(){
  this.datosDenuncia.reset();
  this.datosDenuncia.controls.rutAsociado.enable();
  this.rutBuscaResponse=1;
}
  verificaRut(){
    this.rutBusca=this.datosDenuncia.get('rutAsociado').value
    this.estudianteService.getEstudianteByRut(this.rutBusca).subscribe(data=>{
      if(data.codigo==0){
        this.rutBuscaResponse=1;
        console.log(data)
        this.datosDenuncia.controls.rutAsociado.setValue('');
      }else{
        this.rutBuscaResponse=2;
        this.datoRut=data;
        console.log(data)
        this.datosDenuncia.controls.rutAsociado.setValue(this.rutBusca);
        // this.datosDenuncia.controls.rutAsociado.
        console.log(this.datosDenuncia.controls.rutAsociado.value)
        
        
      }
      
    }, error =>{
      console.log("error")
    })
  }

  getUsuario():void{
    this.loginService.getTokenDecoded();
    console.log(this.loginService.getTokenDecoded())
    this.usuario = this.loginService.getTokenDecoded().sub;
  }
  guardaDenuncia(){
    const denuncia: Denuncia={
      profesional:this.loginService.getTokenDecoded().sub,
      organismo:this.datosDenuncia.value.organismo,
      rutAsociado:this.datosDenuncia.value.rutAsociado,
      folioRit:this.datosDenuncia.value.folioRit,
      fechaAsignada:this.datosDenuncia.value.fechaAsignada
    }
    console.log(denuncia)
    this.denunciaService.guardarDenuncia(denuncia).subscribe(data=>{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'La denuncia ha sido guardado exitosamente..',
              showConfirmButton: false,
              timer: 1500
            })
            console.log(data)
            this.router.navigate(['/dashboard/denuncia/denunciapasodos/'+data.denunciaId ])
    })
  }
}
