import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Seguimiento } from 'src/app/models/seguimiento';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { LoginService } from 'src/app/services/login.service';
import { SeguimientoService } from 'src/app/services/seguimiento.service';

@Component({
  selector: 'app-busq-tab-segui',
  templateUrl: './busq-tab-segui.component.html',
  styleUrls: ['./busq-tab-segui.component.css']
})
export class BusqTabSeguiComponent implements OnInit {
rutParam:string;
formSeguimiento:FormGroup;
profesional:string;
usuarioId:number;
rbd: string;
seguimientoActivo:number;
  constructor
  (
    private fb:FormBuilder,
    private seguimientoService:SeguimientoService,
    private estudianteService:EstudianteService,
    private aRoute:ActivatedRoute,
    public modalService:NgbModal,
    private loginService:LoginService,
  ) 
  { 
    this.formSeguimiento=this.fb.group({
      fechaInicioSeguimiento:['', Validators.required],
      nota:['']
    })
  }

  ngOnInit(): void {
    this.rutParam = this.aRoute.snapshot.paramMap.get('rut')
    this.traerEstudiante();
    this.profesional = this.loginService.getTokenDecoded().sub;
    this.rbd = this.loginService.getTokenDecoded().Rbd;
    this.usuarioId=this.loginService.getTokenDecoded().idUsuario;
  }
traerEstudiante(){
  this.estudianteService.getEstudianteByRut(this.rutParam).subscribe(data=>{
    if(data.seguimiento==1){
      this.seguimientoActivo=1;
    }
  })
}

  activarSeg(val:number){
    //primer se debe activar al estudiante el seguimiento, esto lo realiza de manera automatica el back end
    console.log(val)
    this.estudianteService.getActivaSeguimiento(this.rutParam, val).subscribe(data=>{
      //si la respuesta es valida del backend, pasamos al paso 2 donde creamos obj y creamos la instancia

      if(data.codigo == 1){

          const seguimiento : Seguimiento={
            rutEstudiante:this.rutParam,
            nota:this.formSeguimiento.value.nota,
            fechaInicioSeguimiento:this.formSeguimiento.value.fechaInicioSeguimiento,
            usuarioId:this.usuarioId,
            activo:1,
            rbd:this.rbd,
          }
          this.seguimientoService.createSeguimiento(seguimiento).subscribe(data=>{

          })
        }
      })
      this.modalService.dismissAll();
      this.formSeguimiento.reset();
      
  }
  openModalmd(programa:any) {
    this.modalService.open(programa,{size:'xl'});
  }
}
