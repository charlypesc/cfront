import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from '../../../models/usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading=false
  login: FormGroup;

  constructor(private fb: FormBuilder, 
                      private toastr: ToastrService, 
                      private route: Router,
                      private loginService: LoginService) { 
    this.login = this.fb.group({
      usuario: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }
  log(){
      const usuario: Usuario = {
      nombreUsuario :this.login.value.usuario,
      password      :this.login.value.password,
      nivel:null,
      nombre:null,
      apellido:null,
      rut:null,
      correoElectronico:null,
      establecimiento:null,
      rbd:null
    }
    this.loading= true
    this.loginService.login(usuario).subscribe(data => {
      console.log(data);
      this.loading=false;
      this.loginService.setLocalStorage(data.token);
      this.toastr.success('Login Correcto')  
      this.route.navigate(['/dashboard'])
      this.login.reset();
    },error => {
      console.log(error);
      this.loading=false;
      this.toastr.error('Usuario o contraseña erroneos', 'Intentar de nuevo')
  
  })
/*     setTimeout(() => {
      
      if(usuario.nombreUsuario === 'cparedes' && usuario.password === '123'){
  
        this.toastr.success('Login Correcto')  
        this.route.navigate(['/dashboard'])
  
      }else{
        this.toastr.error('usuario o contraseña erroneos')
      }
      this.loading=false
    },1000) */

  }
    
}
