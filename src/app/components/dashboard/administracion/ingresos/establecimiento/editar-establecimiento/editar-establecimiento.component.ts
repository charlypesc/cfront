import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Establecimiento } from 'src/app/models/establecimiento';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-establecimiento',
  templateUrl: './editar-establecimiento.component.html',
  styleUrls: ['./editar-establecimiento.component.css']
})
export class EditarEstablecimientoComponent implements OnInit {
  id:number;
  datosEs:any={};
	datosEstablecimiento: FormGroup;
  readonly:boolean=true
  constructor(private fb: FormBuilder,
              private aRoute:ActivatedRoute,
              private toastr: ToastrService,
              private establecimientoService: EstablecimientoService,
              private router:Router) { 

                this.id = +this.aRoute.snapshot.paramMap.get('establecimientoId')

              this.datosEstablecimiento = this.fb.group({
                nombreEstablecimiento:['', Validators.required],
                rbd:['', Validators.required],
                direccion:['',Validators.required],
                comuna:['',Validators.required],
                telefono:['', Validators.required],
                director:['', Validators.required],
              })
  }
  ngOnInit(): void {
    this.readonly=true;
    this.establecimientoService.getEstablecimientoById(this.id).subscribe(data=>{
      this.datosEs=data
      console.log(this.datosEs)
      this.datosEstablecimiento.controls.nombreEstablecimiento.setValue(this.datosEs.nombreEstablecimiento);
      this.datosEstablecimiento.controls.rbd.setValue(this.datosEs.rbd)
      this.datosEstablecimiento.controls.direccion.setValue(this.datosEs.direccion)
      this.datosEstablecimiento.controls.comuna.setValue(this.datosEs.comuna)
      this.datosEstablecimiento.controls.director.setValue(this.datosEs.director)
      this.datosEstablecimiento.controls.telefono.setValue(this.datosEs.telefono)
      this.datosEstablecimiento.addControl('status', this.fb.control('',Validators.required))
      this.datosEstablecimiento.controls.status.setErrors;
    })
    
    
  }
  btnEditar(){
    if(this.readonly==true){
      this.readonly=false
      this.datosEstablecimiento.controls.status.setValue('ok')
    }else{
      this.readonly=true
      this.datosEstablecimiento.controls.status.setValue('')
      this.datosEstablecimiento.controls.status.setErrors;
    }
  }
    actualizaEstablecimiento(){

      const establecimiento: Establecimiento = {
        id:this.id,
        nombreEstablecimiento:this.datosEstablecimiento.value.nombreEstablecimiento,
        rbd:this.datosEstablecimiento.value.rbd,
        direccion:this.datosEstablecimiento.value.direccion,
        comuna:this.datosEstablecimiento.value.comuna,
        telefono:this.datosEstablecimiento.value.telefono,
        director:this.datosEstablecimiento.value.director,
        activo:1
      }
      console.log(establecimiento)
      this.establecimientoService.editaEstablecimiento(establecimiento).subscribe(data=>{
        Swal.fire({
          position:'top-end',
          icon:'success',
          title:data.message,
          showConfirmButton:false,
          timer:1500
        })
        this.router.navigate(['/dashboard/administracion/establecimiento/panel-establecimiento'])
      })
      
  }

}
