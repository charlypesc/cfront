import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProtocolosActuacion } from 'src/app/models/protocolosActuacion';
import { ProtocolosService } from 'src/app/services/protocolos.service';
import Swal from 'sweetalert2';
import { ProtocolosComponent } from '../protocolos.component';


@Component({
  selector: 'app-ver-protocolos',
  templateUrl: './ver-protocolos.component.html',
  styleUrls: ['./ver-protocolos.component.css']
})
export class VerProtocolosComponent implements OnInit {
rbd:string;

idProtocolo: number;
datosProtocolos:any=[]

  constructor(private protocolosService: ProtocolosService,
              private toastr:ToastrService) { 
                
              }

  ngOnInit() {
    this.getProtocolos();
    console.log(localStorage)
  }
getProtocolos(){
    this.rbd='7647-3';
    return this.protocolosService.getProtocolos(this.rbd).subscribe(data =>{
      console.log(data)
      this.datosProtocolos = data;
    }, error=>{
      this.toastr.error('Error al traer la informacion', 'No se encuentra info')
    })
  }

borrarProtocolo(idProtocolo){
  Swal.fire({
        title:'Estas Seguro',
        text:'No se puede deshacer',
        icon:'question',
        showCancelButton:true,
        confirmButtonColor:'#3085d6',
        cancelButtonColor:'#d33',
        confirmButtonText:'Si, Borrarlo'
  }).then(respuesta=>{
    if(respuesta.isConfirmed){
      return this.protocolosService.deleteProtocolo(idProtocolo).subscribe(data=>{
        this.toastr.success('Protocolo Eliminado', 'Dato Eliminado')
        this.getProtocolos();
        Swal.fire('Borrado!','El elemento ha sido borrado','success')
      }, error=>{
        this.toastr.error('Error','No pudimos borrar el registro')
      })
    }
   
  })


  
}
}
