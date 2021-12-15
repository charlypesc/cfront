import { Component, OnInit } from '@angular/core';
import { faCoffee, faCogs, faFileAlt, faGavel, faHandshake, faHome, faSearch, faUserCog, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-panel-bienvenida',
  templateUrl: './panel-bienvenida.component.html',
  styleUrls: ['./panel-bienvenida.component.css']
})
export class PanelBienvenidaComponent implements OnInit {

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
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.dataLogin();
  }

  dataLogin(){
    this.rbd=this.loginService.getTokenDecoded().Rbd;
    this.establecimiento=this.loginService.getTokenDecoded().Establecimiento;

  }
}
