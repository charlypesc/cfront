import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { RutParticipanteService } from 'src/app/services/rut-participante.service';

@Component({
  selector: 'app-busqueda-rut',
  templateUrl: './busqueda-rut.component.html',
  styleUrls: ['./busqueda-rut.component.css']
})
export class BusquedaRutComponent implements OnInit {

nuevoParticipante: FormGroup;
nuevaConsultaRut:string;
rtaNuevoParticipante : any={};
codigoRtaRut:boolean;

  constructor(private fb: FormBuilder,
              private toastr:ToastrService,
              private estudianteService: EstudianteService,
              private arrayRutService: RutParticipanteService) 
              {
                this.nuevoParticipante = this.fb.group({
                  rut:[''],
                  rutArray:this.fb.array([])//linea necesaria para crear el formArray    
                })
               }

  ngOnInit(): void {
  }

  get nuevoRutArray() {
    return this.nuevoParticipante.get('rutArray') as FormArray;
  }

//paso 1
  agregarRutParticipante()
  {
    const rutParticipante = this.nuevoParticipante.get('rut').value;
    console.log(rutParticipante)
    this.nuevaConsultaRut=rutParticipante;
    this.getRut(this.nuevaConsultaRut);
  }
//paso 2
  getRut(nuevaConsultaRut){
    this.estudianteService.getEstudianteByRut(nuevaConsultaRut).subscribe(data=>{
      console.log(data);
      this.rtaNuevoParticipante= data;
      if(this.rtaNuevoParticipante.codigo!==0){
        this.addAlias();
        
      }
      this.codigoRtaRut=false;

    })
  }
  //paso 3
  addAlias() {
    this.nuevoRutArray.push(this.fb.control(this.rtaNuevoParticipante));
    this.arrayRutService.arrayRutParticipante=this.nuevoRutArray;
    console.log("del componente A al servicio");
    console.log(this.arrayRutService.arrayRutParticipante)
  }
  eliminaRut(index:number):void{
    if(this.nuevoRutArray.length == 1){
      this.toastr.error('Debe haber al menos 1 participante')
    }else{
      this.nuevoRutArray.removeAt(index)
      this.arrayRutService.arrayRutParticipante=this.nuevoRutArray;
      console.log("Del componente A al servicio, pero de eliminar");
      console.log(this.arrayRutService.arrayRutParticipante)
    }
  }

}
