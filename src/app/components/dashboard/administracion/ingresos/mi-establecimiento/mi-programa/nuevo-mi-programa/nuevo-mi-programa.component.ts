import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Programa } from 'src/app/models/programa';
import { LoginService } from 'src/app/services/login.service';
import { ProgramaService } from 'src/app/services/programa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-mi-programa',
  templateUrl: './nuevo-mi-programa.component.html',
  styleUrls: ['./nuevo-mi-programa.component.css']
})
export class NuevoMiProgramaComponent implements OnInit {
  nuevoPrograma:FormGroup;
  rbd:string;

  constructor
  (
    private fb:FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private LoginService:LoginService,
    private programaService:ProgramaService
  ) 
  {
    this.nuevoPrograma=this.fb.group({
      nombrePrograma:['', Validators.required],
      descPrograma:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.rbd=this.LoginService.getTokenDecoded().Rbd;
  }

  savePrograma(){

    const newPrograma:Programa = {
      nombrePrograma:this.nuevoPrograma.value.nombrePrograma,
      descripcionPrograma:this.nuevoPrograma.value.descPrograma,
      activo:1,
      rbd:this.rbd
    }
console.log(newPrograma);
    this.programaService.guardarPrograma(newPrograma).subscribe(data=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: data.message,
        showConfirmButton: false,
        timer: 3000
      })
    },error=> {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'La tematica no se pudo guardar..',
        showConfirmButton: false,
        timer: 3000
      })
    })
    this.router.navigate(['/dashboard/administracion/miestablecimiento/mi-programa/ver-programa']);
    }

}
