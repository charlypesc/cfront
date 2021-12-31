import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { TematicasService } from 'src/app/services/tematicas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-tematicas',
  templateUrl: './ver-tematicas.component.html',
  styleUrls: ['./ver-tematicas.component.css']
})
export class VerTematicasComponent implements OnInit {
  rbd:string;
  idTematica: number;
  datosTematica:any=[]
  faPlus=faPlus
  constructor(private LoginService:LoginService,
              private TematicasService:TematicasService,
              private toastr:ToastrService) 
              {
                
                
              }

  ngOnInit(): void {

    this.rbd=this.LoginService.getTokenDecoded().Rbd;
    this.getTematicas();
  }


  getTematicas(){
    return this.TematicasService.getTematicas(this.rbd).subscribe(data=>{
      this.datosTematica=data;
      
    })
  }

  borrarTematica(idProtocolo){
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
        return this.TematicasService.deleteTematica(idProtocolo).subscribe(data=>{
          this.toastr.success('Protocolo Eliminado', 'Dato Eliminado')
          this.getTematicas();
          Swal.fire('Borrado!','El elemento ha sido borrado','success')
        }, error=>{
          this.toastr.error('Error','No pudimos borrar el registro')
        })
      }
     
    })
  
  
    
  }
}
