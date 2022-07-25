import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faThemeisle } from '@fortawesome/free-brands-svg-icons';
import { faFile, faTrash } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
import { ReunionesService } from 'src/app/services/reuniones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-reus',
  templateUrl: './mis-reus.component.html',
  styleUrls: ['./mis-reus.component.css']
})
export class MisReusComponent implements OnInit {
  loading=false;
  user:string;
  dataReus:any=[];


  //iconografia
  faDeleted=faTrash;
  faFile=faFile;

  constructor(private reunionesService:ReunionesService,
              private router:Router,
              private loginService:LoginService  ) { }

  ngOnInit(): void {
    this.busquedaLogin();
    this.busquedaReus();
 
  }

  busquedaLogin(){
    this.user=this.loginService.getTokenDecoded().name
  }
  busquedaReus(){
    this.loading=true
    this.reunionesService.getMisReusByUserId().subscribe(data=>{
      console.log(data);
      this.loading=false
      this.dataReus=data;
    });
  }
  verReu(e:any){
    this.router.navigate(['/dashboard/reuniones/reupasotres/'+e]);
  }
  eliminarReu(e:any){
          Swal.fire({
            title: 'Deseas eliminar la reunión?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Borrar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
            this.reunionesService.deleteReu(e).subscribe(data=>{
              if(data.codigo==1)
              Swal.fire('Borrado', '', 'success')
              this.busquedaReus();

            })

            } else if (result.isDenied) {
              Swal.fire('No se ha borrado la reunión', '', 'info')
            }
          })
        
          
          
  }
}
