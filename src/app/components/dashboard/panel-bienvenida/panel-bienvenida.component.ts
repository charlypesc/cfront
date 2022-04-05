import { Component, OnInit } from '@angular/core';
import { faCoffee, faCogs, faFileAlt, faGavel, faHandshake, faHome, faSearch, faUserCog, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { NgxPermissionsService } from 'ngx-permissions';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-panel-bienvenida',
  templateUrl: './panel-bienvenida.component.html',
  styleUrls: ['./panel-bienvenida.component.css']
})
export class PanelBienvenidaComponent implements OnInit {
  
  //el rol del rbd
  role:string;
  
  //el que va a dar permiso
  //permission:string="SuperAdministrador"



  establecimiento:string;
  rbd:string;

  faCoffee = faCoffee;
  faSearch=faSearch;
  faUserCog=faUserCog;
  faGavel=faGavel;
  faFileAlt=faFileAlt;
  faUsers=faUsers;
  faUserPlus=faUserPlus;
  faHome=faHome;
  faCogs=faCogs;
  faHandshake=faHandshake;
  constructor(private loginService:LoginService,
              private ngxPermissionService: NgxPermissionsService) { }

  ngOnInit() {

    this.role=this.loginService.getTokenDecoded().Nivel;
    this.dataLogin();
        // H A R D   C O D E  es el que recibe el valor del usuario
        const perm = [this.role];
        this.ngxPermissionService.loadPermissions(perm)
        console.log(this.role)
  }

  dataLogin(){
    this.rbd=this.loginService.getTokenDecoded().Rbd;
    this.establecimiento=this.loginService.getTokenDecoded().Establecimiento;
    
  }
}
