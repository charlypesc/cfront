import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-panel-seguimiento',
  templateUrl: './panel-seguimiento.component.html',
  styleUrls: ['./panel-seguimiento.component.css']
})
export class PanelSeguimientoComponent implements OnInit {
  dataSiguiendo:any=[];
  constructor
    (
      private estudianteService:EstudianteService,
      private router:Router
    ) 
    {
    }

  ngOnInit(): void {
  
    this.estudianteService.getEnSeguimiento().subscribe(data=>{
      console.log(data);
      this.dataSiguiendo=data;
      
    })
  
  }
  ver(e){
    console.log(e)
    this.router.navigate(['/dashboard/seguimiento/editar-seguimiento/'+e])
  }
}
