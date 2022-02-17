import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel-establecimiento',
  templateUrl: './panel-establecimiento.component.html',
  styleUrls: ['./panel-establecimiento.component.css']
})
export class PanelEstablecimientoComponent implements OnInit {
  establecimientosData:any=[]
  constructor(private router: Router, 
              private establecimientoService: EstablecimientoService) { }

  ngOnInit(): void {

      this.establecimientoService.getEstablecimientos().subscribe(data=>{
        console.log(data);
        this.establecimientosData=data;
      })

  }
  edita(e:any){
    this.router.navigate(['/dashboard/administracion/establecimiento/edita-establecimiento/'+e])
  }
  elimina(e:any){
    
      Swal.fire({
        title: '¿Estas seguro?',
        text: "Esta accion puede repercutir en otros formularios",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminalo!',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.establecimientoService.eliminaEstablecimiento(e).subscribe(data=>{
          Swal.fire(
            'Borrado',
            'El establecimiento ha sido borrado',
            'success'
          )
          this.router.navigate(['/dashboard/administracion/establecimiento/panel-establecimiento'])
        })
        }
      })
    
  }

}
