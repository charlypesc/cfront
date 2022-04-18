import { Component, OnInit } from '@angular/core';
import { faSchool, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { NgxPermissionsService } from 'ngx-permissions';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {
  role:string;
  faUser=faUser;
  faStudent=faUserGraduate;
  faSchool=faSchool;
  constructor(private ngxpermissionservice:NgxPermissionsService,
              private loginService:LoginService) { }

  ngOnInit(){
    this.role = this.loginService.getTokenDecoded().Nivel;
    const perm = [this.role];
    this.ngxpermissionservice.loadPermissions(perm) 
  }

}
