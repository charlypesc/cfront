import { Component, OnInit } from '@angular/core';
import { faSchool, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {
  faUser=faUser;
  faStudent=faUserGraduate;
  faSchool=faSchool;
  constructor() { }

  ngOnInit(): void {
  }

}
