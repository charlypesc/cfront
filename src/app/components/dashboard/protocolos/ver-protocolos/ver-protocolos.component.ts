import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProtocolosService } from 'src/app/services/protocolos.service';

@Component({
  selector: 'app-ver-protocolos',
  templateUrl: './ver-protocolos.component.html',
  styleUrls: ['./ver-protocolos.component.css']
})
export class VerProtocolosComponent implements OnInit {
rbd:string;
datosProtocolos:any = [];
idProtocolo: number;

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
  return this.protocolosService.deleteProtocolo(idProtocolo).subscribe(data=>{
    this.toastr.success('Protocolo Eliminado', 'Dato Eliminado')
    this.getProtocolos();
  }, error=>{
    this.toastr.error('Error','No pudimos borrar el registro')
  })
}
}
