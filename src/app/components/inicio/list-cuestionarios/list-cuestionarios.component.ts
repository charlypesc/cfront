import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuestionario } from 'src/app/models/cuestionario';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-list-cuestionarios',
  templateUrl: './list-cuestionarios.component.html',
  styleUrls: ['./list-cuestionarios.component.css']
})
export class ListCuestionariosComponent implements OnInit {
  loading=false;
  listCuestionarios : Cuestionario[]=[];

  constructor(private cuestionarioService: CuestionarioService,
              private router: Router,
              private respuestaCuestionario:RespuestaCuestionarioService) { }

  ngOnInit(): void {
    this.getListCuestionarios();
  }

  getListCuestionarios():void{
    this.cuestionarioService.getListCuestionarios().subscribe(data=>{
      
      this.loading=true;
      this.listCuestionarios=data;
      this.loading=false;
      console.log(data);
    })
  }

  ingresarNombre(idCuestionario:number):void{
    this.respuestaCuestionario.idCuestionario = idCuestionario;
    this.router.navigate(['/inicio/ingresarNombre'])

  }

}
