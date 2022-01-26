import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { ProtocolosService } from 'src/app/services/protocolos.service';

@Component({
  selector: 'app-protocolo-comp',
  templateUrl: './protocolo-comp.component.html',
  styleUrls: ['./protocolo-comp.component.css']
})
export class ProtocoloCompComponent implements OnInit {
  idProtocolo:number;
  protocolos:any=[];
  temporalProtocolos:Array<any>=[]
  rbd:string;
  constructor(private protocolosService: ProtocolosService,
              private loginService:LoginService,
              private toastr:ToastrService) { }

  ngOnInit(): void {
    this.rbd = this.loginService.getTokenDecoded().Rbd;
    this.buscarProtocolos();
  }
  buscarProtocolos()//Protocolos paso 1: trae los protocolos de la api
  {
    return this.protocolosService.getProtocolos(this.rbd).subscribe(data=>{
      this.protocolos = data;
    console.log(this.protocolos)
    }, error=>{
      this.toastr.error('No podemos encontrar los protocolos','No hay protocolos ingresados?')
    })
  }

changeFn(e)//Protocolos paso 2; del evento del select, pasa el valor Id a la funcion y carga el idProtocolo que ha sido seleccionado 
  {
    this.idProtocolo = e;
  }

protocolosArrayTemporal() //protocolos paso 3 se crea el array temporal con los protocolos seleccionados
  {
      this.temporalProtocolos.push(this.protocolos[this.idProtocolo])
  }
eliminaProtocolo(inde:number):void//protocolos eliminar del array
  {
    this.temporalProtocolos.splice(inde,inde+1);
  }

}
