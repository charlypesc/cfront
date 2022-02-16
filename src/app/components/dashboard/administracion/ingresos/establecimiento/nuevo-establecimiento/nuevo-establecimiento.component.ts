import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Establecimiento } from 'src/app/models/establecimiento';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';

@Component({
  selector: 'app-nuevo-establecimiento',
  templateUrl: './nuevo-establecimiento.component.html',
  styleUrls: ['./nuevo-establecimiento.component.css']
})
export class NuevoEstablecimientoComponent implements OnInit {
	datosEstablecimiento: FormGroup;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private establecimientoService: EstablecimientoService) { 
      this.datosEstablecimiento = this.fb.group({
        nombreEstablecimiento:['', Validators.required],
        rbd:['', Validators.required],
        direccion:['',Validators.required],
        comuna:['',Validators.required],
        telefono:['', Validators.required],
        director:['', Validators.required]

      })		
    }

  ngOnInit(): void {
  }
  registrarEstablecimiento(){

    const establecimiento: Establecimiento = {
      nombreEstablecimiento:this.datosEstablecimiento.value.nombreEstablecimiento,
      rbd:this.datosEstablecimiento.value.rbd,
      direccion:this.datosEstablecimiento.value.direccion,
      comuna:this.datosEstablecimiento.value.comuna,
      telefono:this.datosEstablecimiento.value.telefono,
      director:this.datosEstablecimiento.value.director
    }
      this.establecimientoService.guardarEstablecimiento(establecimiento).subscribe(data=>{
        this.toastr.success('El establecimiento ha sido guardado con exito', 'Establecimiento registrado')
        this.datosEstablecimiento.reset();
      }, error=>{
        this.toastr.error('Opps...ocurrio un error', 'Error');
      })
    }

}
