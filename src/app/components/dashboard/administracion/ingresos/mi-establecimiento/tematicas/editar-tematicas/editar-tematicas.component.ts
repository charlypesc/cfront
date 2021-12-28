import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tematicas } from 'src/app/models/tematicas';
import { TematicasService } from 'src/app/services/tematicas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-tematicas',
  templateUrl: './editar-tematicas.component.html',
  styleUrls: ['./editar-tematicas.component.css']
})
export class EditarTematicasComponent implements OnInit {
id:number;
datosTematica:any=[]
actualizaTematica:FormGroup;
  constructor(private aRoute:ActivatedRoute,
              private fb:FormBuilder,
              private tematicaService:TematicasService) 
  {
    this.id=+this.aRoute.snapshot.paramMap.get('numIdTematica')
    this.actualizaTematica=this.fb.group({
      nombreTematica:['', Validators.required],
      descripcionTematica:['']
    })
  }

  ngOnInit(): void {
    console.log(this.id)
    this.getTematicas(this.id);
  }

  getTematicas(id:number)
  {
    this.tematicaService.getTematicaById(id).subscribe(data=>
      {
        this.datosTematica=data
        
      })
  }
  uptTematica()
  {
    const actTematica: Tematicas = 
        {
          id:this.id,
          tematica:this.actualizaTematica.value.nombreTematica,
          descripcion:this.actualizaTematica.value.descripcionTematica,
          rbd:this.datosTematica.rbd
        }

        Swal.fire({
          title:'Estas Seguro',
            text:'Esta accion modificará la actual temática',
            icon:'question',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'Si, Actualizar'
        }).then(respuesta=>
          {
            if(respuesta.isConfirmed){
              this.tematicaService.updateTematica(actTematica).subscribe(data=>{
              console.log(data)    
        
            })  
            Swal.fire('Actualizado','Protocolo Actualizado','success')  
            }
          })
  }


}
