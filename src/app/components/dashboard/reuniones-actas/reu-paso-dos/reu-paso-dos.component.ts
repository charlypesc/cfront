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
    this.cargarTematicas();
    console.log(this.lstStaticData)
    this.selectTematicas = new Array <number>();
    
  }
// - - - - - M E T O D O S   T  E M A T I C A S - - - - - 
  cargarTematicas(){
    this.tematicasService.getTematicas(this.rbd).subscribe(data=>{
      this.lstStaticData=data;
    })
  }
  getTematicaId(e:any, id:number, tematica:string)

  {
    if(e.target.checked)
    {
      console.log(id + ' checked')
      this.selectTematicas.push(id)
      this.createTematicaObj(id);
    }else
    {
      console.log(id + ' UnChecked')
      this.selectTematicas = this.selectTematicas.filter(m=>m!=id)//LOGICA: metodo crea un nuevo array que llena con elementos provistas por la funcion (funcion no llena el array con el elemento coincidente)
      this.createTematicaObj(id)
    }
    console.log(this.selectTematicas)
  }
  createTematicaObj(id:number){
    const arrayTematicasObj:TematicasReg[]=[]

    for (let index = 0; index < this.selectTematicas.length; index++) {
      const arrayTematicas : TematicasReg = new TematicasReg()
      arrayTematicas.tematica=this.lstStaticData[index].tematica
      arrayTematicas.numeroId=this.lstStaticData[index].id
      arrayTematicas.rbd=this.lstStaticData[index].rbd
      arrayTematicasObj.push(arrayTematicas)
    }
    this.tematicasReg=arrayTematicasObj;
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
