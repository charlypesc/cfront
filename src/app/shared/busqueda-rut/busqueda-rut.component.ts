import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ParticipanteReg } from 'src/app/models/participanteReg';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { LoginService } from 'src/app/services/login.service';
import { RutParticipanteService } from 'src/app/services/rut-participante.service';
import { ThisTypeNode } from 'typescript';

@Component({
  selector: 'app-busqueda-rut',
  templateUrl: './busqueda-rut.component.html',
  styleUrls: ['./busqueda-rut.component.css']
})
export class BusquedaRutComponent implements OnInit {
funcionario:any;
nuevoParticipante: FormGroup;
nuevaConsultaRut:string;
rtaNuevoParticipante : any={};
codigoRtaRut:boolean;

  constructor(private fb: FormBuilder,
              private toastr:ToastrService,
              private estudianteService: EstudianteService,
              private loginService:LoginService,
              private arrayRutService: RutParticipanteService) 
              {
                this.nuevoParticipante = this.fb.group({
                  rut:[''],
                  rutArray:this.fb.array([])//linea necesaria para crear el formArray    
                })
               }

  ngOnInit(): void {
    this.funcionarioBusca();
  }

  get nuevoRutArray() {
    return this.nuevoParticipante.get('rutArray') as FormArray;
  }
  
funcionarioBusca(){
  this.funcionario=this.loginService.getTokenDecoded().sub;
}
//paso 1 - trae el rut del formulario
  agregarRutParticipante()
  {
    const rutParticipante = this.nuevoParticipante.get('rut').value;
    this.nuevaConsultaRut=rutParticipante;
    this.getRut(this.nuevaConsultaRut);
  }
//paso 2 - consulta si el rut existe, y si existe, trae los datos del estudiante.
  getRut(nuevaConsultaRut){
    this.estudianteService.getEstudianteByRut(nuevaConsultaRut).subscribe(data=>{
  
      this.rtaNuevoParticipante= data;
      if(this.rtaNuevoParticipante.codigo!==0){
        this.addAlias();
        
      }
      this.codigoRtaRut=false;

    })
  }
  //paso 3 se genera el participante que se muestra a la vista, aun no se genera el objeto final
  //se pasa por servicio
  addAlias() {
    this.nuevoRutArray.push(this.fb.control(this.rtaNuevoParticipante));
    this.arrayRutService.arrayRutParticipante=this.nuevoRutArray;

  }
//elimina
  eliminaRut(index:number):void{
    if(this.nuevoRutArray.length == 1){
      this.toastr.error('Debe haber al menos 1 participante')
    }else{
      this.nuevoRutArray.removeAt(index)
      this.arrayRutService.arrayRutParticipante=this.nuevoRutArray;


    }
  }



}
