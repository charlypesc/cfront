import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

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
              private router:Router,
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
                  nacimiento:[''],
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

      this.establecimiento=this.LoginService.getTokenDecoded().Establecimiento
      this.rbd=this.LoginService.getTokenDecoded().Rbd

      this.pieBol=data.pie
      this.datosEstudiantes.controls.pie.setValue(this.pieBol)
      this.datosEstudiantes.controls.nombre.setValue(this.datosEs.nombre);
      this.datosEstudiantes.controls.apellido.setValue(this.datosEs.apellido)
      this.datosEstudiantes.controls.curso.setValue(this.datosEs.curso)
      this.datosEstudiantes.controls.run.setValue(this.datosEs.run)
      this.datosEstudiantes.controls.apoderado.setValue(this.datosEs.apoderado)
      this.datosEstudiantes.controls.direccionApoderado.setValue(this.datosEs.direccionApoderado)
      this.datosEstudiantes.controls.telefonoApoderado.setValue(this.datosEs.telefonoApoderado)
      this.datosEstudiantes.controls.nacimiento.setValue(this.datosEs.nacimiento)
      this.datosEstudiantes.controls.sexo.setValue(this.datosEs.sexo)
      this.datosEstudiantes.controls.direccion.setValue(this.datosEs.direccion)
      this.datosEstudiantes.controls.comuna.setValue(this.datosEs.comuna)
      this.datosEstudiantes.controls.correo.setValue(this.datosEs.correo)
      this.datosEstudiantes.controls.telefono.setValue(this.datosEs.telefono)
      this.datosEstudiantes.controls.contactoEmergencia.setValue(this.datosEs.contactoEmergencia)
      this.datosEstudiantes.controls.telefonoEmergencia.setValue(this.datosEs.telefonoEmergencia)
      this.datosEstudiantes.controls.grupoSanguineo.setValue(this.datosEs.grupoSanguineo)
      this.datosEstudiantes.controls.prevision.setValue(this.datosEs.prevision)
      this.datosEstudiantes.controls.alergias.setValue(this.datosEs.alergias)
      this.datosEstudiantes.controls.medicamentosContraindicados.setValue(this.datosEs.medicamentosContraindicados)
      this.datosEstudiantes.controls.enfermedadesCronicas.setValue(this.datosEs.enfermedadesCronicas)
      this.datosEstudiantes.controls.correoApoderado.setValue(this.datosEs.correoApoderado)
      this.datosEstudiantes.controls.apoderadoSuplente.setValue(this.datosEs.apoderadoSuplente)
      this.datosEstudiantes.controls.direccionApoderadoSuplente.setValue(this.datosEs.direccionApoderadoSuplente)
      this.datosEstudiantes.controls.telefonoApoderadoSuplente.setValue(this.datosEs.telefonoApoderadoSuplente)
      this.datosEstudiantes.controls.correoApoderadoSuplente.setValue(this.datosEs.correoApoderadoSuplente)
    })
    
  }


  registrarEstudiante(){
	  
  var year = new Date;
 
   const estudiante: Estudiante = {
      id:this.id,
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
        anoCursando:year.getFullYear(),
        activo:1
        // pie:this.pieBool
        
   }
   console.log(estudiante)
   this.estudianteService.updateEstudianteById(estudiante).subscribe(data=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: data.message,
      showConfirmButton: false,
      timer: 3000
    })
    this.router.navigate(['/dashboard/administracion/estudiante/panel-estudiante'])
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
