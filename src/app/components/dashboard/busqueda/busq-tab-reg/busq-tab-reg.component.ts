import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-busq-tab-reg',
  templateUrl: './busq-tab-reg.component.html',
  styleUrls: ['./busq-tab-reg.component.css']
})
export class BusqTabRegComponent implements OnInit {

  loading=false;
  dato:any={};
  rutParam:string;
  listadoRegistros:any=[];
  constructor(private aRoute:ActivatedRoute,
              private router:Router,
              private estudianteService: EstudianteService,
              private registroService:RegistroService) { 

    this.rutParam = this.aRoute.snapshot.paramMap.get('rut')

  }

  ngOnInit(): void {
    this.busqueda();
    this.getListadoRegistros();
  }
  //busqueda de estudiante
  busqueda(){
    this.loading=true;
   this.estudianteService.getEstudianteByRut(this.rutParam).subscribe(data=>{
     this.dato=data;
     const rut= this.rutParam;
   })
 }
   //traer registros
   getListadoRegistros(){
    this.registroService.getRegistros(this.rutParam).subscribe(data=>{
      this.listadoRegistros = data;
      this.loading=false;
    })
  }
  getNumRegistro(i) :void {
    this.router.navigate(['/dashboard/busqueda/busqregpasotres/'+i+'/'+1])
  }
}
