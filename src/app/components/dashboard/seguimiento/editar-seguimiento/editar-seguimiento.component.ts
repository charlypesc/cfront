import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { ProgramaService } from 'src/app/services/programa.service';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import Swal from 'sweetalert2';
import { RegistroComponent } from '../../registro/registro.component';

@Component({
  selector: 'app-editar-seguimiento',
  templateUrl: './editar-seguimiento.component.html',
  styleUrls: ['./editar-seguimiento.component.css']
})
export class EditarSeguimientoComponent implements OnInit {
rutEstudiante:string;
dataEstudiante:any=[];
tabs:number=1;
dataSeguimiento:any=[];
dataPrograma:any=[]
closeResult = '';
constructor
  (
    private aRoute:ActivatedRoute,
    private seguimientoService:SeguimientoService,
    private estudianteService:EstudianteService,
    public modalService:NgbModal,
    private programaService:ProgramaService
  ) 
  { 
    this.rutEstudiante = this.aRoute.snapshot.paramMap.get('rut')
  }
  
  ngOnInit(): void {
    this.traerIdEstudiante();
    this.traerSeguimiento();
    this.traerProgramas();
  }

  traerIdEstudiante(){
    this.estudianteService.getEstudianteByRut(this.rutEstudiante).subscribe(data=>{
      this.dataEstudiante=data;
    })
    
  }
  traerSeguimiento(){
    this.seguimientoService.getListSeguimientoRut(this.rutEstudiante).subscribe(data=>{
      this.dataSeguimiento=data;
      console.log(data);
    })
  }

  traerProgramas(){
    this.programaService.getListProgramas().subscribe(programa=>{
      this.dataPrograma=programa;
      console.log(programa)
    })
  }

  tabsFn(i:number){
    this.tabs=i;
    console.log(this.tabs)
  }
  fn(){
    console.log("llego al ok")
    this.modalService.dismissAll();
  }
  openModalmd(programa:any) {
    this.modalService.open(programa,{size:'xl'});
  }
  openModalInstanciamd(instancia:any) {
    this.modalService.open(instancia,{size:'xl'});
  }
}
