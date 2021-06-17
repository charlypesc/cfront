//Paso a paso para declarar formulario con controles dinamicos
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';//paso 1 importar la clase formarray
import { ToastrService } from 'ngx-toastr';
import { Cuestionario } from 'src/app/models/cuestionario';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-nueva-pregunta',
  templateUrl: './nueva-pregunta.component.html',
  styleUrls: ['./nueva-pregunta.component.css']
})
export class NuevaPreguntaComponent implements OnInit {
  nuevaPregunta: FormGroup;
  pregunta: Pregunta;
  rtaCorrecta = 0;
  @Output ()enviarPregunta = new EventEmitter<Pregunta>();

  constructor(private fb:FormBuilder,
              private toastr: ToastrService) {

          this.nuevaPregunta=this.fb.group({
            titulo:['', Validators.required],
            //paso 2 - se define el formarray
            respuestas:this.fb.array([])
          });
          }

  ngOnInit(): void {
    this.agregarRespuestaPorDefecto();
  }
  //Paso 3 Acceder al control FormArray con metodo get
    get getRespuestas(): FormArray{
      return this.nuevaPregunta.get('respuestas') as FormArray;
    }
    
    //paso 4 crear el metod que agregar respuesta a array
    agregarRespuesta():void{
      this.getRespuestas.push(this.fb.group({
        descripcion:['',Validators.required],
        esCorrecta:0
      }));
    }
    
    agregarRespuestaPorDefecto():void{
      this.agregarRespuesta();
      this.agregarRespuesta();
    }

    eliminarRespuesta(index: number):void{
      if(this.getRespuestas.length ===2){
        this.toastr.error('Como minimo la pregunta debe contener 2 respuestas', 'Error')
      }else{
        this.getRespuestas.removeAt(index);
      }
    }
    setRespuestaValida(index: number):void{
      this.rtaCorrecta=index;
    }
    agregarPregunta():void{
      //SE NECESITAN LOS 2 VALORES PARA GENERAR EL OBJETO
      //SE TRAE EL PRIMER VALOR. obtenemos el titulo de la pregunta QUE IRA EN LA SECCION PREGUNTA
      const descripcionPregunta = this.nuevaPregunta.get('titulo').value;
      //SE TRAE EL SEGUNDO VALOR TIPO ARRAY. Obtenemos el array de respuestas
      const arrayRespuestas = this.nuevaPregunta.get('respuestas').value;
      
      console.log(arrayRespuestas)
      /* SE DECLARA EL ARRAY QUE SE RECORRERA PARA TRAER CADA RESPUESTA DINAMICA Y SE FORMATEA UN NUEVO ARRAY CON 3 VALORES 
       (ID, DESCRIPCION, esCorrecta de tipo boolean) QUE FINALMENTE SE ANEXARA AL OBJETO FINAL */
      const arrayRta: Respuesta[] = []; //se declara
      arrayRespuestas.forEach((element, index) => {//se itera
        const respuesta: Respuesta = new Respuesta(element.descripcion, false);//se arma el objeto de cada iteracion para luego ser empujado al array
        if(index === element.esCorrecta){
          respuesta.esCorrecta = true;
        }
        
        arrayRta.push(respuesta)//se indica el array y se empuja cada iteracion con el formato segun el modelo respuesta

      });
      //SE CREA EL OBJETO QUE VA A LA VISTA
      const pregunta: Pregunta = new Pregunta(descripcionPregunta, arrayRta);
      this.enviarPregunta.emit(pregunta);
      this.reset();
    }

    reset():void{
      this.rtaCorrecta = 0;
      this.nuevaPregunta.reset();
      this.getRespuestas.clear();
      this.agregarRespuestaPorDefecto();
    }
 
}