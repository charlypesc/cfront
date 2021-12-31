import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tematicas } from 'src/app/models/tematicas';
import { LoginService } from 'src/app/services/login.service';
import { TematicasService } from 'src/app/services/tematicas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-tematicas',
  templateUrl: './nueva-tematicas.component.html',
  styleUrls: ['./nueva-tematicas.component.css']
})
export class NuevaTematicasComponent implements OnInit {
  datosNuevaTematica:FormGroup

  rbd:string
  constructor(private fb:FormBuilder,
  private toastr: ToastrService,
  private router: Router,
  private LoginService:LoginService,
  private TematicaService:TematicasService) 
  { 
    this.datosNuevaTematica=this.fb.group({
      nombreTematica:['', Validators.required],
      descripcionTematica:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.rbd=this.LoginService.getTokenDecoded().Rbd;

  }

  saveTematica(){
    const nuevaTematica: Tematicas = {
      tematica:this.datosNuevaTematica.value.nombreTematica,
      descripcion:this.datosNuevaTematica.value.descripcionTematica,
      rbd:this.rbd
    }
    this.TematicaService.guardarTematica(nuevaTematica).subscribe(data=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'La tematica ha sido guardada exitosamente..',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['/dashboard/administracion/miestablecimiento/tematicas/paneltematicas'])
    },error=>{

      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'La tematica no se pudo guardar..',
        showConfirmButton: false,
        timer: 3000
      })

    })
  }
}