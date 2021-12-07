import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-denuncia-paso-uno',
  templateUrl: './denuncia-paso-uno.component.html',
  styleUrls: ['./denuncia-paso-uno.component.css']
})
export class DenunciaPasoUnoComponent implements OnInit {
datosDenuncia:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  pasoUno(){
    console.log(this.datosDenuncia)
  }
}
