import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faThemeisle } from '@fortawesome/free-brands-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { stringify } from 'querystring';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  	datosEstudiantes: FormGroup;
	pieBool:boolean;
  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private estudianteService: EstudianteService) {
            	this.datosEstudiantes= this.fb.group({
					nombre:['', Validators.required],
					apellido:['', Validators.required],
					establecimiento:[''],
					curso:['', Validators.required],
					run:['',Validators.required],
					apoderado:['', Validators.required],
					direccionApoderado:['', Validators.required],
					telefonoApoderado:['', Validators.required],
					rbd:['', Validators.required],
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

  ngOnInit(): void {
  }

  pieBo(){
	  if(this.datosEstudiantes.value.pie == null || this.datosEstudiantes.value.pie == ''){
		  this.pieBool = false;
	  }else{
		  this.pieBool = this.datosEstudiantes.value.pie;
	  }
  }
  registrarEstudiante(){
	  
	   this.pieBo();
	
	  const estudiante: Estudiante = {
		  	nombre:this.datosEstudiantes.value.nombre,
		  	apellido:this.datosEstudiantes.value.apellido,
		  	curso:this.datosEstudiantes.value.curso,
		  	establecimiento:this.datosEstudiantes.value.establecimiento,
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
			rbd:this.datosEstudiantes.value.rbd,
			pie:this.pieBool
		}

		this.estudianteService.guardarEstudiante(estudiante).subscribe(data => {
			this.toastr.success('El estudiante ha sido ingresado correctamente, Estudiante registrado')

		})
	}
  
  }