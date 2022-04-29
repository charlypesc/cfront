import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProgramaService } from 'src/app/services/programa.service';
import { LoginService } from 'src/app/services/login.service';
import { Programa } from 'src/app/models/programa';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-mi-programa',
  templateUrl: './editar-mi-programa.component.html',
  styleUrls: ['./editar-mi-programa.component.css']
})
export class EditarMiProgramaComponent implements OnInit {
  
  nuevoPrograma:FormGroup;
  id:number;
  dataPrograma:any=[];
  rbd:string;
  constructor
  (
    private aRoute:ActivatedRoute,
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
    this.id= +this.aRoute.snapshot.paramMap.get('id');
    this.traerData();
  }

  traerData(){
    this.programaService.getProgramaId(this.id).subscribe(data=>{
    this.dataPrograma=data
    this.rbd=data.rbd;
  })
  }

  updatePrograma(){
    const newPrograma:Programa = {
      id:this.id,
      creadoPor:'null',
      nombrePrograma:this.nuevoPrograma.value.nombrePrograma,
      descripcionPrograma:this.nuevoPrograma.value.descPrograma,
      activo:1,
      rbd:this.rbd

    }
    console.log(newPrograma);
    this.programaService.updatePrograma(newPrograma).subscribe(data=>{
      console.log(data);
    },error=> {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'El programa no se pudo guardar..',
        showConfirmButton: false,
        timer: 1000
      })
    })
    this.router.navigate(['/dashboard/administracion/miestablecimiento/mi-programa/ver-programa']);
    }

}


