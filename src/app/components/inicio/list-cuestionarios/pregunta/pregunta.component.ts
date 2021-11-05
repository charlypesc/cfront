import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { RespuestaCuestionario } from 'src/app/models/respuestaCuestionario';
import { RespuestaCuestionarioDetalle } from 'src/app/models/respuestaCuestionarioDetalles';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  idCuestionario:number;
  listPreguntas: Pregunta[] = [];
  loading=false;
  rtaConfirmada = false;
  opcionSeleccionada:any;
  index=0;
  idRespuestaSeleccionada:number;
  listRespuestaDetalle: RespuestaCuestionarioDetalle[] = [];


  constructor(private RespuestaCuestionarioService: RespuestaCuestionarioService,
              private cuestionarioService: CuestionarioService, 
              private router: Router) { }

  ngOnInit(): void {
    this.idCuestionario=this.RespuestaCuestionarioService.idCuestionario;
    console.log(this.RespuestaCuestionarioService.idCuestionario);//valor que trae el id del cuestionario
    this.getCuestionario();
    if(this.idCuestionario == null){
      this.router.navigate(['/inicio/bienvenidos']);
    }

    //cada vez que se inicia el componente el array de cuestionario se vuelve a cero
    this.RespuestaCuestionarioService.respuestas=[];
  }

  getCuestionario():void{
    this.loading=true;
    this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(data=>{
      this.listPreguntas = data.listPreguntas;
      console.log(data);
      this.loading=false;
      this.RespuestaCuestionarioService.cuestionario=data;
    })
  }
  obtenerPregunta() :string{
    return this.listPreguntas[this.index].descripcion;

  }

  getIndex(): number{
    return this.index;
  }
  respuestaSeleccionada(respuesta:any, idRespuesta:number):void{
    this.opcionSeleccionada = respuesta;
    this.rtaConfirmada=true;
    this.idRespuestaSeleccionada=idRespuesta;
  }
  AddClassOption(respuesta:any):string{
    if(respuesta === this.opcionSeleccionada){
      return 'active text-light';
    }
  }
  siguiente():void{
    //guardar respuesta en memoria
    this.RespuestaCuestionarioService.respuestas.push(this.idRespuestaSeleccionada);

    //creamos un objeto RespuestaDetalle para impactar BBDD
    const detalleRespuesta:RespuestaCuestionarioDetalle = {
      respuestaId: this.idRespuestaSeleccionada
    }

    //agregamos objeto al array
    this.listRespuestaDetalle.push(detalleRespuesta);


    this.rtaConfirmada = false;
    this.index++;
    this.idRespuestaSeleccionada=null;
    if(this.index === this.listPreguntas.length){
      //this.router.navigate(['/inicio/respuestaCuestionario'])
      this.guardarRespuestaCuestionario()
    }
  }

  guardarRespuestaCuestionario():void{
    const rtaCuestionario: RespuestaCuestionario = {
      cuestionarioId:this.RespuestaCuestionarioService.idCuestionario,
      nombrePartipantes: this.RespuestaCuestionarioService.nombreParticipante,
      listCuestionarioDetalle: this.listRespuestaDetalle
    }
    this.loading=true;
    this.RespuestaCuestionarioService.guardarRespuestaCuestionario(rtaCuestionario).subscribe(data=>{
      this.loading=false;
      this.router.navigate(['/inicio/respuestaCuestionario'])
    },error=>{
      this.loading=false
      console.log(error)
    })
  }

}
