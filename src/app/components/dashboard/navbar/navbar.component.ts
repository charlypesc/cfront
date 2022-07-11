import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario:string;
  
  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {

    if(localStorage.getItem('token')==null){
      this.router.navigate(['/inicio/login'])
    }
  this.dataLogin();
  }
  ngAfterContentChecked(){
    //console.log("llegue al dash");

  } 
  logOut(e:any){
    if(e=='Cerrar Sesión'){
      
      this.loginService.removeLocalStorage();
      this.router.navigate(['/inicio/login']);
     
    }
  }  
  dataLogin(){
    this.usuario=this.loginService.getTokenDecoded().sub;
    
  }

}