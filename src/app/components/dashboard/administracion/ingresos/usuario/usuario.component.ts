import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
datosUsuario:FormGroup;
r='7647-3';
e='Escuela Libertad';
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private usuarioService: UsuarioService) {
        this.datosUsuario=this.fb.group({
          nombreUsuario:['', Validators.required],
          password:['', [Validators.required,Validators.minLength(8)]],
          confirmPassword:[''],
          nivel:['',Validators.required],
          nombre:['', Validators.required],
          apellido:['', Validators.required],
          rut:['', Validators.required],
          correoElectronico:['', Validators.required , ],
          establecimiento:[''],
          //cargo:['', Validators.required],
          rbd:[''],

        },{validator:this.checkPassword});
     }

  ngOnInit(): void {
  }

  registrarUsuario(){
  console.log(this.datosUsuario)
    
  const usuario: Usuario = {

    nombreUsuario     :this.datosUsuario.value.nombreUsuario,
    password          :this.datosUsuario.value.password,
    nivel             :this.datosUsuario.value.nivel,
    nombre            :this.datosUsuario.value.nombre,
    apellido          :this.datosUsuario.value.apellido,
    rut               :this.datosUsuario.value.rut,
    correoElectronico :this.datosUsuario.value.correoElectronico,
    establecimiento   :this.e,
    rbd               :this.r,

  }
console.log(usuario);  
  this.usuarioService.saveUser(usuario).subscribe(data=>{
    this.toastr.success('El usuario fue ingresado con exito','Usuario registrado')
    this.datosUsuario.reset();
  }, error=>{
    this.toastr.error('Ocurrio un problema','No se registra nada')
  })
  
  
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    // Lectura de operador ternario: si pass y confirPass son iguales = nulo; y sino devuelve un obj 'notSame' verdadero (en el formgroup->errors)
    return pass === confirmPass ? null : { notSame: true};
  }

}