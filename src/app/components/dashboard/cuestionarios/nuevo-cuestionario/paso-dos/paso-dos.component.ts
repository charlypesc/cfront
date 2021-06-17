import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cuestionario } from 'src/app/models/cuestionario';
import { Pregunta } from 'src/app/models/pregunta';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit {
  tituloCuestionario: string;
  descripcionCuestionario: string;
  listPreguntas: Pregunta[]=[];
  loading=false;


  constructor(private CuestionarioService: CuestionarioService,
              private toastr: ToastrService,
              private router: Router ) { 

  }

  ngOnInit(): void {
  this.tituloCuestionario = this.CuestionarioService.tituloCuestionario;
  this.descripcionCuestionario=this.CuestionarioService.descripcion;
  }

  guardarPregunta(pregunta: Pregunta):void{
    this.listPreguntas.push(pregunta);
    console.log(this.listPreguntas);
  }
  eliminarPregunta(index: number):void{
    this.listPreguntas.splice(index, 1);
  }

  guardarCuestionario():void{
    const cuestionario: Cuestionario = {
      nombre:this.tituloCuestionario,
      descripcion:this.descripcionCuestionario,
      listPreguntas : this.listPreguntas
    };
    console.log(cuestionario);
    this.loading =true
    //enviamos cuestionario al back

    this.CuestionarioService.guardarCuestionario(cuestionario).subscribe(data =>{
      this.toastr.success('El cuestionario fue registrado con exito', 'Registro Exitoso');
      this.router.navigate(['/dashboard']);
      this.loading =false
    }, error=>{
      this.toastr.error('Opps...ocurrio un error', 'Error');
      this.router.navigate(['/dashboard']);
      this.loading =false
    });
  }

}
