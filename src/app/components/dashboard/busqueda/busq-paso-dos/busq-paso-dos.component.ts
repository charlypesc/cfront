import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-busq-paso-dos',
  templateUrl: './busq-paso-dos.component.html',
  styleUrls: ['./busq-paso-dos.component.css']
})
export class BusqPasoDosComponent implements OnInit {
dato:any={};
rutService:string;
rutParam:string;
listadoRegistros:any=[];
loading=false;

  constructor(private aRoute:ActivatedRoute,
              private busquedaService:BusquedaService,
              private estudianteService:EstudianteService,
              private registroService:RegistroService,
              private router:Router) 
              { 
                this.rutParam = this.aRoute.snapshot.paramMap.get('rut');
              }

  ngOnInit(): void {
    this.busqueda();
    this.getlistadoRegistros();
  }

  //busqueda de estudiante
   busqueda(){
     this.loading=true;
    this.estudianteService.getEstudianteByRut(this.rutParam).subscribe(data=>{
      this.dato=data;
      const rut= this.rutParam;
      console.log(this.dato)
    })
  }
  //traer registros
  getlistadoRegistros(){
    this.registroService.getRegistros(this.rutParam).subscribe(data=>{
      this.listadoRegistros = data;
      this.loading=false;
    })
  }

  //trrae el numero de registro que se cargo
  getNumRegistro(i) :void {
    this.router.navigate(['/dashboard/busqueda/busqregpasotres/'+i])
  }
}

