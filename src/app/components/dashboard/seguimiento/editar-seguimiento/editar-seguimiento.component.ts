import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Programa } from 'src/app/models/programa';
import { Seguimiento } from 'src/app/models/seguimiento';
import { SeguimientoProg } from 'src/app/models/seguimientoProg';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { LoginService } from 'src/app/services/login.service';
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
formPrograma:FormGroup;

arraySeguimientoProg:SeguimientoProg[]=[]
constructor
  (
    private aRoute:ActivatedRoute,
    private loginService: LoginService,
    private seguimientoService:SeguimientoService,
    private estudianteService:EstudianteService,
    public modalService:NgbModal,
    private programaService:ProgramaService, 
    private fb:FormBuilder,
  ) 
  { 
    this.rutEstudiante = this.aRoute.snapshot.paramMap.get('rut')
    this.formPrograma=this.fb.group({
      fechaInicioIngreso:['', Validators.required],
      programaNota:['', Validators.required],
      programa:['', Validators.required]
      
    })
  }
  
  ngOnInit(): void {
    this.traerIdEstudiante();
    this.traerSeguimiento();
    this.traerProgramas();
  }
// login(){
// console.log(this.loginService.getTokenDecoded().sub);
// console.log(this.loginService.getTokenDecoded().Rbd);
// }

agregarPrograma(){
//   const programa : SeguimientoProg = new SeguimientoProg()

//     programa.nombrePrograma            =this.formPrograma.value.programa,
//     programa.fechaIngreso              =this.formPrograma.value.fechaInicioIngreso,
//     programa.activo                    =1,
//     programa.rbd                       =this.loginService.getTokenDecoded().sub,
//     programa.ingresadoPor              =this.loginService.getTokenDecoded().sub,



//   const seguimiento : Seguimiento =  {
    
//       id                        :this.dataSeguimiento[0].id,
//       rutEstudiante             :this.dataSeguimiento[0].rutEstudiante,
//       nota                      :this.dataSeguimiento[0].nota,
//       fechaInicioSeguimiento    :this.dataSeguimiento[0].fechaInicioSeguimiento,
//       fechaFinSeguimiento       :this.dataSeguimiento[0].fechaFinSeguimiento,
//       usuarioId                 :this.dataSeguimiento[0].usuarioId,
//       activo                    :this.dataSeguimiento[0].activo,
//       rbd                       :this.dataSeguimiento[0].rbd,

  
  

// }
  
  // console.log(programa)
}
  traerIdEstudiante(){
    this.estudianteService.getEstudianteByRut(this.rutEstudiante).subscribe(data=>{
      this.dataEstudiante=data;
    })
    
  }
  traerSeguimiento(){
    this.seguimientoService.getListSeguimientoRut(this.rutEstudiante).subscribe(data=>{
      this.dataSeguimiento=data;
    })
  }

  traerProgramas(){
    this.programaService.getListProgramas().subscribe(programa=>{
      this.dataPrograma=programa;
      // console.log(programa)
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
