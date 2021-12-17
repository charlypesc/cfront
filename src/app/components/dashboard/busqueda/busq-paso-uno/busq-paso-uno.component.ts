import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-busq-paso-uno',
  templateUrl: './busq-paso-uno.component.html',
  styleUrls: ['./busq-paso-uno.component.css']
})
export class BusqPasoUnoComponent implements OnInit {
rutBusqueda: FormGroup;
rutBuscar:string;
rtaRutBuscar : any = {};
  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private estudianteService:EstudianteService,
              private busquedaService: BusquedaService,
              private router:Router) { 
                this.rutBusqueda = this.fb.group({
                  rut:['', Validators.required]
                })
              }

  ngOnInit(): void {
 
  }


  busqueda(){
    //el primero tra el rut del form y se lo pasa al segundo metodo valida que existe y sino lanza el alerta
    this.rutBuscar = this.rutBusqueda.get('rut').value;
    this.estudianteService.getEstudianteByRut(this.rutBuscar).subscribe(data => {
      this.rtaRutBuscar = data;
      if(this.rtaRutBuscar.codigo!==0){

        this.toastr.success('rut encontrado')
        //guarda el rut en el servicio
        this.busquedaService.rut = this.rtaRutBuscar;
        this.router.navigate(['/dashboard/busqueda/buspasodos/'+this.rutBuscar])

      }else{
        this.toastr.error('','Rut no se encuentra')
      }
    })
    


  }

}
