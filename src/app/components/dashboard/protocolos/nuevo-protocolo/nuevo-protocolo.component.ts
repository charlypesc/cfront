import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProtocolosActuacion } from 'src/app/models/protocolosActuacion';
import { LoginService } from 'src/app/services/login.service';
import { ProtocolosService } from 'src/app/services/protocolos.service';

@Component({
  selector: 'app-nuevo-protocolo',
  templateUrl: './nuevo-protocolo.component.html',
  styleUrls: ['./nuevo-protocolo.component.css']
})
export class NuevoProtocoloComponent implements OnInit {
  datosNuevoProtocolo: FormGroup;
  rbd:string

  constructor(private fb:FormBuilder,
              private toastr: ToastrService,
              private protocolosService: ProtocolosService,
              private router: Router,
              private LoginService:LoginService) { 
                this.datosNuevoProtocolo=this.fb.group({
                  nombreProtocolo:['', Validators.required],
                  descripcionProtocolo:['', Validators.required]
                })
              }

  ngOnInit() {
    this.rbd=this.LoginService.getTokenDecoded().Rbd;
  }
saveProtocolos(){
  const nuevoProtocolo: ProtocolosActuacion = {
    nombreProtocolo: this.datosNuevoProtocolo.value.nombreProtocolo,
    descripcionProtocolo: this.datosNuevoProtocolo.value.descripcionProtocolo,
    rbd:this.rbd
  }
  this.protocolosService.guardarProtocolo(nuevoProtocolo).subscribe(data=>{
    this.toastr.success('Ingreso exitoso','Protocolo Guardado')
    this.router.navigate(['/dashboard'])
  })

  }
}
