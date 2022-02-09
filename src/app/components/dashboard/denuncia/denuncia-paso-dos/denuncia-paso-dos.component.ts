import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListaDoctosDenuncia } from 'src/app/models/ListaDoctosDenuncia';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { RegistroService } from 'src/app/services/registro.service';
import { ReunionesService } from 'src/app/services/reuniones.service';

@Component({
  selector: 'app-denuncia-paso-dos',
  templateUrl: './denuncia-paso-dos.component.html',
  styleUrls: ['./denuncia-paso-dos.component.css']
})
export class DenunciaPasoDosComponent implements OnInit {
loading:false;
datosDenuncia:any=[];
datosDenunciaPasoDos:FormGroup;
id:number;
rutReg:string;
registrosRutAsociado:any;
reunionesRutAsociado:any;
idTemporalReg:number;
idTemporalReu:number;

temporalListaDoctos:ListaDoctosDenuncia[]=[];

  constructor(private aRoute:ActivatedRoute,
              private registroService:RegistroService,
              private denunciaService:DenunciaService,
              private reunionesService:ReunionesService,
              private fb:FormBuilder) {
                this.datosDenunciaPasoDos=this.fb.group({

                })
      this.id = +this.aRoute.snapshot.paramMap.get('denunciaId')
    
   }

  ngOnInit(){
    
    this.getRegById(this.id);
    
    

  }
  getRegById(id:number){
    this.denunciaService.getDenunciaById(id).subscribe(data=>{
      this.datosDenuncia=data;
      this.rutReg=this.datosDenuncia.rutAsociado
      console.log(this.rutReg)
      this.getRegistroByRut();
      this.getReunionRut();
    })
    
  }
  getRegistroByRut(){
    this.registroService.getRegistros(this.rutReg).subscribe(data=>{
      this.registrosRutAsociado=data;
      console.log(this.registrosRutAsociado)
    })
  }
  getReunionRut(){
    this.reunionesService.getReunionByRut(this.rutReg).subscribe(data=>{
    this.reunionesRutAsociado=data;
    console.log(this.reunionesRutAsociado)
    })
  }
  agregaRegDocto(){
    
    const arrayTemporal = new ListaDoctosDenuncia()
    arrayTemporal.asunto = this.registrosRutAsociado[this.idTemporalReg].asunto
    arrayTemporal.fecha = this.registrosRutAsociado[this.idTemporalReg].fechaIngreso
    arrayTemporal.idPropioDoc = this.registrosRutAsociado[this.idTemporalReg].id;
    arrayTemporal.rbd=this.registrosRutAsociado[this.idTemporalReg].rbd;
    arrayTemporal.tipoDoc="Registro"
    arrayTemporal.tipoReunion="Presencial"
    this.temporalListaDoctos.push(arrayTemporal);
    console.log(this.temporalListaDoctos)
  }

  changeFnReg(e:any){
    console.log(e);
    this.idTemporalReg=e;
    console.log(this.registrosRutAsociado[e])

  }

  agregaReuDocto(){
    const arrayTemporal = new ListaDoctosDenuncia()
    arrayTemporal.asunto = this.reunionesRutAsociado[this.idTemporalReu].asunto
    arrayTemporal.fecha = this.reunionesRutAsociado[this.idTemporalReu].fechaIngreso
    arrayTemporal.idPropioDoc = this.reunionesRutAsociado[this.idTemporalReu].id;
    arrayTemporal.rbd=this.reunionesRutAsociado[this.idTemporalReu].rbd;
    arrayTemporal.tipoDoc=this.reunionesRutAsociado[this.idTemporalReu].tipo
    arrayTemporal.tipoReunion=this.reunionesRutAsociado[this.idTemporalReu].tipoReunion
    this.temporalListaDoctos.push(arrayTemporal);
    console.log(this.temporalListaDoctos)
  }

  changeFnReu(e:any){
    console.log(e);
    this.idTemporalReu=e;
    console.log(this.reunionesRutAsociado[e])

  }
}
