import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
                      private route: Router) { 
    this.login = this.fb.group({
      usuario: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }
  log(){
    console.log(this.login)
      const usuario: Usuario = {
      nombreUsuario :this.login.value.usuario,
      password      :this.login.value.password
    }
    this.loading= true
    setTimeout(() => {
      
      if(usuario.nombreUsuario === 'cparedes' && usuario.password === '123'){
  
        this.toastr.success('Login Correcto')  
        this.route.navigate(['/dashboard'])
  
      }else{
        this.toastr.error('usuario o contraseña erroneos')
      }
      this.loading=false
    },1000)
    console.log(usuario)
  }
    
}
