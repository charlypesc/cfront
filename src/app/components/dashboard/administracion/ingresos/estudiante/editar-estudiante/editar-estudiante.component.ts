import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {
  id:number
  establecimiento:string
	rbd:string
  	datosEstudiantes: FormGroup;
	pieBool:boolean;
  datosEs:any={};
  readonly:boolean=true;
  pieBol:boolean=false;

  constructor(private fb: FormBuilder,
              private LoginService:LoginService,
              private aRoute:ActivatedRoute,
              private estudianteService: EstudianteService) {
                this.id = +this.aRoute.snapshot.paramMap.get('estudianteId')
                
                this.datosEstudiantes= this.fb.group({
                  nombre:['', Validators.required],
                  apellido:['', Validators.required],
                  curso:['', Validators.required],
                  run:['',Validators.required],
                  apoderado:['', Validators.required],
                  direccionApoderado:['', Validators.required],
                  telefonoApoderado:['', Validators.required],
                  nacimiento:['', Validators.required],
                  sexo:[''],
                  direccion:[''],	
                  comuna:[''],
                  correo:[''],
                  telefono:[''],
                  contactoEmergencia:[''],
                  telefonoEmergencia:[''],
                  grupoSanguineo:[''],
                  prevision:[''],
                  alergias:[''],
                  medicamentosContraindicados:[''],
                  enfermedadesCronicas:[''],
                  correoApoderado:[''],
                  apoderadoSuplente:[''],
                  direccionApoderadoSuplente:[''],
                  telefonoApoderadoSuplente:[''],
                  correoApoderadoSuplente:[''],
                  pie:[''],
                })
              }

  ngOnInit(){
    this.estudianteService.getEstudianteById(this.id).subscribe(data=>{
      this.datosEs=data;
      console.log(this.datosEs)
      this.pieBol=data.pie
      this.datosEstudiantes.controls.pie.setValue(this.pieBol)
      
    })

  }


  registrarEstudiante(){
	  
  
 
   const estudiante: Estudiante = {
       nombre:this.datosEstudiantes.value.nombre,
       apellido:this.datosEstudiantes.value.apellido,
       curso:this.datosEstudiantes.value.curso,
       establecimiento:this.establecimiento,
       run:this.datosEstudiantes.value.run,
       nacimiento:this.datosEstudiantes.value.nacimiento,
     sexo:this.datosEstudiantes.value.sexo,
     direccion:this.datosEstudiantes.value.direccion,
     comuna:this.datosEstudiantes.value.comuna,
     correo:this.datosEstudiantes.value.correo,
     telefono:this.datosEstudiantes.value.telefono,
      contactoEmergencia:this.datosEstudiantes.value.contactoEmergencia,
     telefonoEmergencia:this.datosEstudiantes.value.telefonoEmergencia,
     grupoSanguineo:this.datosEstudiantes.value.grupoSanguineo,
     prevision:this.datosEstudiantes.value.prevision,
     alergias:this.datosEstudiantes.value.alergias,
     medicamentosContraindicados:this.datosEstudiantes.value.medicamentosContraindicados,
     enfermedadesCronicas:this.datosEstudiantes.value.enfermedadesCronicas,
     apoderado:this.datosEstudiantes.value.apoderado,
     direccionApoderado:this.datosEstudiantes.value.direccionApoderado,
     telefonoApoderado:this.datosEstudiantes.value.telefonoApoderado,
     correoApoderado:this.datosEstudiantes.value.correoApoderado,
     apoderadoSuplente:this.datosEstudiantes.value.apoderadoSuplente,
     direccionApoderadoSuplente:this.datosEstudiantes.value.direccionApoderadoSuplente,
     telefonoApoderadoSuplente:this.datosEstudiantes.value.telefonoApoderadoSuplente,
     correoApoderadoSuplente:this.datosEstudiantes.value.correoApoderadoSuplente,
     rbd:this.rbd,
     pie:this.pieBool
   }

   this.estudianteService.guardarEstudiante(estudiante).subscribe(data => {
     console.log("Estudiante actualizado")

   })
 }
 editar(){
   if(this.readonly==false){
     this.readonly=true
    }else{

      this.readonly=false;
    }
}

}
