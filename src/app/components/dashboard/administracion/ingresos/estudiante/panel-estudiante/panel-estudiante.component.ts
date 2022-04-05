import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-panel-estudiante',
  templateUrl: './panel-estudiante.component.html',
  styleUrls: ['./panel-estudiante.component.css']
})
export class PanelEstudianteComponent implements OnInit {
listadoEstudiantes:any=[];
curso:any=[];
loadingListadoCursos:boolean=false;
loadingEstudiantesCurso:boolean=false;
constructor(private estudianteService: EstudianteService,
            private cursoService:CursoService,
            private router:Router) {

   }

  ngOnInit() {

    this.loadingListadoCursos=true;
    this.cursoService.getCursos().subscribe(data=>{
      this.curso=data;
      this.loadingListadoCursos=false;
      console.log(data.message)
    });
  }
  buscarCurso(e:any){
    console.log(e);
      if(this.listadoEstudiantes.length > 0){
        this.listadoEstudiantes=[];
      }
    this.loadingEstudiantesCurso=true
      this.estudianteService.getEstudianteRbdCurso(e).subscribe(data=>{
        this.listadoEstudiantes=data;
        this.loadingEstudiantesCurso=false
      })
    }
    editar(e){
      this.router.navigate(['/dashboard/administracion/estudiante/editar-estudiante/'+e])
    }
    eliminar(e){
      console.log('pendiente la eliminacion logica')
    }
}

