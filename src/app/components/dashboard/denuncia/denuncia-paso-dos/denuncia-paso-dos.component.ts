import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { decode } from 'querystring';
import { Denuncia } from 'src/app/models/denuncia';
import { ListaDoctosDenuncia } from 'src/app/models/ListaDoctosDenuncia';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { RegistroService } from 'src/app/services/registro.service';
import { ReunionesService } from 'src/app/services/reuniones.service';
import Swal from 'sweetalert2';

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
registrosRutAsociadoTer:any;
reunionesRutAsociadoTer:any;
idTemporalReg:number;
idTemporalReu:number;
idTemporalRegTer:number;
idTemporalReuTer:number;

codeatras:boolean=true;

codeTerceros:boolean=false;
temporalListaDoctos:ListaDoctosDenuncia[]=[];

  constructor(private aRoute:ActivatedRoute,
              private registroService:RegistroService,
              private denunciaService:DenunciaService,
              private reunionesService:ReunionesService,
              private fb:FormBuilder,
              private router:Router) {
                this.datosDenunciaPasoDos=this.fb.group({

                })
      this.id = +this.aRoute.snapshot.paramMap.get('denunciaId')
    
   }

  ngOnInit(){
    
    this.getRegById(this.id);
    console.log(this.codeatras)

    //token validacion de tiempo
    const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(localStorage.getItem('token'))
      console.log(decodedToken.exp)

      const token=localStorage.getItem('token')
      console.log(token)
      if(helper.isTokenExpired(token)){
        console.log("token expirado")
        this.router.navigate(['/dashboard/login'])
      }else{"token valido"}

  }
  ngOnDestroy(){
    
  }
  getRegById(id:number){
    this.denunciaService.getDenunciaById(id).subscribe(data=>{
      this.datosDenuncia=data;
      this.rutReg=this.datosDenuncia.rutAsociado
     
      this.getRegistroByRut();
      this.getReunionRut();
      console.log("D A T A ")
      console.log(data)
    })
    
  }
  getRegistroByRut(){
    this.registroService.getRegistros(this.rutReg).subscribe(data=>{
      this.registrosRutAsociado=data;
      
    })
  }
  getReunionRut(){
    this.reunionesService.getReunionByRut(this.rutReg).subscribe(data=>{
    this.reunionesRutAsociado=data;
   
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
  agregaRegDoctoTer(){
    
    const arrayTemporal = new ListaDoctosDenuncia()
    arrayTemporal.asunto = this.registrosRutAsociadoTer[this.idTemporalRegTer].asunto
    arrayTemporal.fecha = this.registrosRutAsociadoTer[this.idTemporalRegTer].fechaIngreso
    arrayTemporal.idPropioDoc = this.registrosRutAsociadoTer[this.idTemporalRegTer].id;
    arrayTemporal.rbd=this.registrosRutAsociadoTer[this.idTemporalRegTer].rbd;
    arrayTemporal.tipoDoc="Registro"
    arrayTemporal.tipoReunion="Presencial"
    this.temporalListaDoctos.push(arrayTemporal);
    console.log(this.temporalListaDoctos)
  }

  agregaReuDoctoTer(){
    const arrayTemporal = new ListaDoctosDenuncia()
    arrayTemporal.asunto = this.reunionesRutAsociadoTer[this.idTemporalReuTer].asunto
    arrayTemporal.fecha = this.reunionesRutAsociadoTer[this.idTemporalReuTer].fechaIngreso
    arrayTemporal.idPropioDoc = this.reunionesRutAsociadoTer[this.idTemporalReuTer].id;
    arrayTemporal.rbd=this.reunionesRutAsociadoTer[this.idTemporalReuTer].rbd;
    arrayTemporal.tipoDoc=this.reunionesRutAsociadoTer[this.idTemporalReuTer].tipo
    arrayTemporal.tipoReunion=this.reunionesRutAsociadoTer[this.idTemporalReuTer].tipoReunion
    this.temporalListaDoctos.push(arrayTemporal);
    console.log(this.temporalListaDoctos)
  }
  changeFnReg(e:any){
    console.log(e);
    this.idTemporalReg=e;
    

  }
  changeFnRegTer(e:any){
    console.log(e);
    this.idTemporalRegTer=e;
    

  }
  changeFnReuTer(e:any){
    console.log(e);
    this.idTemporalReuTer=e;
    
  }


  changeFnReu(e:any){
    console.log(e);
    this.idTemporalReu=e;
    
  }
  deleteDocRepositorioTemporal(inde:number){
    this.temporalListaDoctos.splice(inde,inde+1)
  }
  getDatosRegistrosTerceros(){
    Swal.fire({
      title: 'Ingresa el numero de RUT',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Buscar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        this.registroService.getRegistros(login).subscribe(data=>{
          this.registrosRutAsociadoTer=data
          if(data.codigo==0){
            Swal.fire('No se encuentra el rut')
          }
          else{
            console.log(data)
            this.codeTerceros=true
          }
        })
        this.reunionesService.getReunionByRut(login).subscribe(dat=>{
          this.reunionesRutAsociadoTer=dat;
        })
      }
    })

  }
  guardarDenuncia(){
    const denuncia: Denuncia={
     fechaAsignada:this.datosDenuncia.fechaAsignada,
     fechaIngreso:this.datosDenuncia.fechaIngreso,
     folioInterno:this.datosDenuncia.folioInterno,
     folioRit:this.datosDenuncia.folioRit,
     id:this.datosDenuncia.id,
     ListaDoctosDenuncia:this.temporalListaDoctos,//array de documentos.    
     organismo:this.datosDenuncia.organismo,
     profesional:this.datosDenuncia.profesional,
     rutAsociado:this.datosDenuncia.rutAsociado
    }
    this.denunciaService.updateDenuncia(denuncia).subscribe(data=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'La denuncia ha sido actualizada..',
      showConfirmButton: false,
      timer: 3000
    })
      
      this.router.navigate(['/dashboard/denuncia/denunciapasotres/'+this.datosDenuncia.id])
    }, error =>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Algo salio mal, contacta al administrador de sistema..',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['/dashboard'])
    })
  }
}
