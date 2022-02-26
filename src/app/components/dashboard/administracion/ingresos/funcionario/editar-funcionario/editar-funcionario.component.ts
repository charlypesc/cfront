import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {
id:number;
datosFu:any={}
readonly:boolean=true;
// editable:boolean=true

establecimiento:string
rbd:string
datosFuncionario: FormGroup;


  constructor(  private aRoute:ActivatedRoute,
                private LoginService:LoginService,
                private fb: FormBuilder,
                private router:Router,
                private toastr: ToastrService,
                private funcionarioService:FuncionarioService) 
                {
                      this.id = +this.aRoute.snapshot.paramMap.get('funcionarioId')

                      this.datosFuncionario=this.fb.group({
                        nombre:['', Validators.required],
                        apellido:['', Validators.required],
                        rut:['',Validators.required],
                        telefono:['', Validators.required],
                        correoElectronico:['',Validators.required],
                        direccion:['', Validators.required],
                        cargo:[{value:'', disabled:true,}, Validators.required]
                      })
                }

  ngOnInit(){
    this.funcionarioService.getFuncionarioId(this.id).subscribe(data=>{
      this.datosFu=data
      this.establecimiento=this.LoginService.getTokenDecoded().Establecimiento
      this.rbd=this.LoginService.getTokenDecoded().Rbd 
  
      this.datosFuncionario.controls.nombre.setValue(this.datosFu.nombre)
      this.datosFuncionario.controls.apellido.setValue(this.datosFu.apellido)
      this.datosFuncionario.controls.rut.setValue(this.datosFu.rut)
      this.datosFuncionario.controls.telefono.setValue(this.datosFu.telefono)
      this.datosFuncionario.controls.correoElectronico.setValue(this.datosFu.correoElectronico)
      this.datosFuncionario.controls.direccion.setValue(this.datosFu.direccion)
      this.datosFuncionario.controls.cargo.setValue(this.datosFu.cargo)
      //B T N   Crea el control status, que se valida internamente
      this.datosFuncionario.addControl('status', this.fb.control('',Validators.required))
      console.log(this.datosFuncionario)
    })
  
   
  }

  editarBt(){
    if(this.readonly==true){
      console.log("caigo en el true")
      this.datosFuncionario.get('cargo').enable();
      this.datosFuncionario.get('status').enable();
      this.readonly=false
    }else{
      console.log("caigo en el else")
      this.readonly=true
      this.datosFuncionario.get('cargo').disable();
      this.datosFuncionario.controls.status.setErrors;//quitar el error 

    }
  
  }
    

  changeFn(e:any){
    this.datosFuncionario.controls.cargo.setValue(e);
  }

  actualizarFuncionario(){
    console.log(this.datosFuncionario)

        const funcionario: Funcionario = {
          id:this.id,
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
      
      this.funcionarioService.actualizaFuncionario(funcionario).subscribe(data=> {
        this.toastr.success('El Funcionario fue ingresado con exito','Funcionario registrado')
        this.datosFuncionario.reset();
        console.log(data);
        this.router.navigate(['/dashboard/administracion/funcionario/panel-funcionario'])
      });

    }

}
