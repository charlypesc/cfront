import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel-funcionario',
  templateUrl: './panel-funcionario.component.html',
  styleUrls: ['./panel-funcionario.component.css']
})
export class PanelFuncionarioComponent implements OnInit {
datosFu:any=[]

  constructor(private router:Router,
              private funcionarioService:FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.getFuncionarioTodos().subscribe(data=>{
      this.datosFu=data;
      console.log(data)
    })
  }

  edita(e:any){
    this.router.navigate(['/dashboard/administracion/funcionario/editar-funcionario/'+e])

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
        this.funcionarioService.eliminaFuncionario(e).subscribe(data=>{
        Swal.fire(
          'Borrado',
          'El establecimiento ha sido borrado',
          'success'
        )
        this.funcionarioService.getFuncionarioTodos().subscribe(data=>{
          this.datosFu=data
        })
      })
      }
    })
  
  }
  

}
