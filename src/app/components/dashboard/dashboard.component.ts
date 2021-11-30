import { Component, OnInit } from '@angular/core';
import { faCoffee, faCogs, faFileAlt, faGavel, faHandshake, faHome, faSearch, faUserCog, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
    console.log(localStorage);
  }

}
