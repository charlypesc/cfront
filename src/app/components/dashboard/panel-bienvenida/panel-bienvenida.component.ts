import { Component, OnInit } from '@angular/core';
import { faCoffee, faCogs, faFileAlt, faGavel, faHandshake, faHome, faSearch, faUserCog, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-panel-bienvenida',
  templateUrl: './panel-bienvenida.component.html',
  styleUrls: ['./panel-bienvenida.component.css']
})
export class PanelBienvenidaComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
