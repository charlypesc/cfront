import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  datosFuncionario: FormGroup;

  constructor(private fb: FormBuilder,
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
                      establecimiento:['',Validators.required],
                      cargo:['', Validators.required],
                      rbd:['', Validators.required],

                    })
                 }

  ngOnInit(): void {
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
          establecimiento:this.datosFuncionario.value.establecimiento,
          cargo:this.datosFuncionario.value.cargo,
          rbd:this.datosFuncionario.value.rbd

        }
      
      this.funcionarioService.guardarFuncionario(funcionario).subscribe(data=> {
        this.toastr.success('El Funcionario fue ingresado con exito','Funcionario registrado')
        console.log(data);
      });

    }
  }


