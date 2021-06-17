import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit {
  tituloCuestionario: string;
  descripcionCuestionario: string;
  constructor(private cuestionario: CuestionarioService ) { 

  }

  ngOnInit(): void {
  this.tituloCuestionario = this.cuestionario.tituloCuestionario;
  this.descripcionCuestionario=this.cuestionario.descripcion;
  }

}
