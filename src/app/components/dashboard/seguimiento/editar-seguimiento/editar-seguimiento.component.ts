import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-editar-seguimiento',
  templateUrl: './editar-seguimiento.component.html',
  styleUrls: ['./editar-seguimiento.component.css']
})
export class EditarSeguimientoComponent implements OnInit {
rutEstudiante:string;
dataEstudiante:any=[];
tabs:number=1;

constructor
  (
    private aRoute:ActivatedRoute,
    private estudianteService:EstudianteService
  ) 
  { 
    this.rutEstudiante = this.aRoute.snapshot.paramMap.get('rut')
  }
  
  ngOnInit(): void {
    this.traerIdEstudiante();
  }

  traerIdEstudiante(){
    this.estudianteService.getEstudianteByRut(this.rutEstudiante).subscribe(data=>{
      this.dataEstudiante=data;
    })
    
  }

  tabsFn(i:number){
    this.tabs=i;
    console.log(this.tabs)
  }

}
