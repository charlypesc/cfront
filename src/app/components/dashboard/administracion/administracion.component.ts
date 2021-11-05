import { Component, OnInit } from '@angular/core';
import { faSchool, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {
faUser=faUser;
faStudent=faUserGraduate;
faSchool=faSchool;
  constructor() { }

  ngOnInit(): void {
  }

}
