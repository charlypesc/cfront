import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParticipanteReg } from 'src/app/models/participanteReg';
import { TematicasReg } from 'src/app/models/tematicasReg';
import { LoginService } from 'src/app/services/login.service';
import { ReunionesService } from 'src/app/services/reuniones.service';
import { TematicasService } from 'src/app/services/tematicas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reu-paso-dos',
  templateUrl: './reu-paso-dos.component.html',
  styleUrls: ['./reu-paso-dos.component.css']
})
export class ReuPasoDosComponent implements OnInit {
  rbd:string;
  idParam:number;
  datosPasoUno:any={}
  rutManual:string;
  nombreManuel:string;
  listParticipantesManual:ParticipanteReg[] = []
  lstStaticData:any;
  selectTematicas:number[];
  tematicasReg:any;
  constructor(private aRoute:ActivatedRoute,
              private reunionesService:ReunionesService,
              private tematicasService:TematicasService,
              private loginService:LoginService,
    ) {
    { 
      var idReunion = this.aRoute.snapshot.paramMap.get('reunionId');
      this.idParam=parseInt(idReunion);
    }
   }

  ngOnInit() {
    this.rbd = this.loginService.getTokenDecoded().Rbd;
    this.getReunion();
  }
  getReunion(){
    this.reunionesService.getReunionById(this.idParam).subscribe(data=>{
      this.datosPasoUno=data
      console.log(data)
    })
  }
  async ingresoParticipante(){
    const { value: rut } = await Swal.fire({
      title: 'Ingresa numero RUT',
      input: 'text',
      inputLabel: 'Ingresa RUT',
      inputPlaceholder: 'Ej: 17999888K'
    })
    
    if (rut) {
      const { value: nombre } = await Swal.fire({
        title: 'Ingresa Nombre y Apellido',
        input: 'text',
        inputLabel: 'Nombre y apellido',
        inputPlaceholder: 'Ej: Carlos Escobar'
      })
      if(rut && nombre){
        const partManual: ParticipanteReg = new ParticipanteReg()
        partManual.rut=rut
        partManual.nombreParticipante=nombre
        this.listParticipantesManual.push(partManual)
        console.log(this.listParticipantesManual)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Participante manual ingresado correctamente',
          showConfirmButton: false,
          timer: 1000
        })
      }
    }
  }

}
