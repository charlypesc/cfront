import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ProgramaService } from 'src/app/services/programa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-mi-programa',
  templateUrl: './ver-mi-programa.component.html',
  styleUrls: ['./ver-mi-programa.component.css']
})
export class VerMiProgramaComponent implements OnInit {
  faPlus=faPlus
  dataProgramas:any=[]
  toastr: any;
  constructor
  (
    private router:Router,
    private programaService:ProgramaService
  ) 
  {

  }

  ngOnInit(): void {
    this.traerProgramas();
  }

traerProgramas(){
  this.programaService.getListProgramas().subscribe(data=>{
    this.dataProgramas=data
  })
}
delPrograma(e:any){

      Swal.fire({
        title:'Estas Seguro',
        text:'No se puede deshacer',
        icon:'question',
        showCancelButton:true,
        confirmButtonColor:'#3085d6',
        cancelButtonColor:'#d33',
        confirmButtonText:'Si, Borrarlo'
    }).then(respuesta=>{
    if(respuesta.isConfirmed){
      return this.programaService.deletePrograma(e).subscribe(data=>{
        // this.toastr.success('Programa eliminado', 'Borrado permanente')
         this.traerProgramas();
        Swal.fire('Borrado!','El elemento ha sido borrado','success')
      }, error=>{
        this.toastr.error('Error','No pudimos borrar el registro')
      })
    }

    })


}

}
