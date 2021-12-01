import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProtocolosActuacion } from 'src/app/models/protocolosActuacion';
import { ProtocolosService } from 'src/app/services/protocolos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-protocolos',
  templateUrl: './editar-protocolos.component.html',
  styleUrls: ['./editar-protocolos.component.css']
})
export class EditarProtocolosComponent implements OnInit {
id:number
protocoloData:any={};
actualizacionNuevoProtocolo:FormGroup;

datosProtocolos:any = [];
  constructor(	private aRoute:ActivatedRoute,
            	private protocolosService: ProtocolosService,
              private fb:FormBuilder){

              this.id = +this.aRoute.snapshot.paramMap.get('numIdProtocolo')

              this.actualizacionNuevoProtocolo=this.fb.group({
                nombreProtocolo:['', Validators.required],
                descripcionProtocolo:['',Validators.required]
              })
  }

  ngOnInit(): void {
    console.log(this.id)
	  this.getProtocolo();
  }

  getProtocolo(){
    this.protocolosService.getProtocoloById(this.id).subscribe(data=>{
    this.protocoloData=data;
    console.log(this.protocoloData.rbd);
  })
}

  actualizaProtocolo(){
    const actProtocolo: ProtocolosActuacion = {
      id:this.id,
      nombreProtocolo:this.actualizacionNuevoProtocolo.value.nombreProtocolo,
      descripcionProtocolo:this.actualizacionNuevoProtocolo.value.descripcionProtocolo,
      rbd:this.protocoloData.rbd,
      nombreEstablecimiento:this.protocoloData.nombreEstablecimiento
    }
    Swal.fire({
      title:'Estas Seguro',
        text:'Esta accion modificara el actual protocolo',
        icon:'question',
        showCancelButton:true,
        confirmButtonColor:'#3085d6',
        cancelButtonColor:'#d33',
        confirmButtonText:'Si, Actualiza'
    }).then(respuesta=>{
        if(respuesta.isConfirmed){
          this.protocolosService.updateProtocolo(actProtocolo).subscribe(data=>{
          console.log(data)
        })  
        Swal.fire('Actualizado','Protocolo Actualizado','success')  
        }
    })


    
  }
  
  
}
