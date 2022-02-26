import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css']
})
export class PanelUsuarioComponent implements OnInit {
datosUs:any=[];
  constructor(private router:Router,
              private usuarioService:UsuarioService,
              private loginService:LoginService) { }

  ngOnInit(): void {

    var rbd = this.loginService.getTokenDecoded().Rbd;
    this.usuarioService.getUsuarioRbd().subscribe(data=>{
      this.datosUs=data;
      console.log(this.datosUs)
    })

  }
  
  edita(e:any){
this.router.navigate(['/dashboard/administracion/usuarios/editar-usuario/'+e])
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
        this.usuarioService.eliminaUsuario(e).subscribe(data=>{
        Swal.fire(
          'Borrado',
          'El establecimiento ha sido borrado',
          'success'
        )
        this.usuarioService.getUsuarioRbd().subscribe(data=>{
          this.datosUs=data
        })
      })
      }
    })

  }
}
