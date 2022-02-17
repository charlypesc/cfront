import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-nuevo-funcionario',
  templateUrl: './nuevo-funcionario.component.html',
  styleUrls: ['./nuevo-funcionario.component.css']
})
export class NuevoFuncionarioComponent implements OnInit {

  establecimiento:string
  rbd:string
  datosFuncionario: FormGroup;

  constructor(private fb: FormBuilder,
    private LoginService:LoginService,
    private toastr: ToastrService,
    private router: Router,
    private funcionarioService: FuncionarioService) { 
      
      this.datosFuncionario=this.fb.group({
        nombre:['', Validators.required],
        apellido:['', Validators.required],
        rut:['',Validators.required],
        telefono:['', Validators.required],
        correoElectronico:['',Validators.required],
        direccion:['', Validators.required],
        cargo:['', Validators.required]
      })
    }

  ngOnInit(): void {
    this.establecimiento=this.LoginService.getTokenDecoded().Establecimiento
    this.rbd=this.LoginService.getTokenDecoded().Rbd 
  }
  changeFn(e:any){
    this.datosFuncionario.controls.cargo.setValue(e);
  }
    registrarFuncionario(){
    console.log(this.datosFuncionario)

        const funcionario: Funcionario = {
          nombre:this.datosFuncionario.value.nombre,
          apellido:this.datosFuncionario.value.apellido,
          rut:this.datosFuncionario.value.rut,
          telefono:this.datosFuncionario.value.telefono,
          correoElectronico:this.datosFuncionario.value.correoElectronico,
          direccion:this.datosFuncionario.value.direccion,
          establecimiento:this.establecimiento,
          cargo:this.datosFuncionario.value.cargo,
          rbd:this.rbd,
          activo:1
        }
      
      this.funcionarioService.guardarFuncionario(funcionario).subscribe(data=> {
        this.toastr.success('El Funcionario fue ingresado con exito','Funcionario registrado')
        this.datosFuncionario.reset();
        console.log(data);
        this.router.navigate(['/dashboard/administracion/funcionario/panel-funcionario'])
      });

    }

}
