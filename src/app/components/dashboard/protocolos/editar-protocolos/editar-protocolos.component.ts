import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-protocolos',
  templateUrl: './editar-protocolos.component.html',
  styleUrls: ['./editar-protocolos.component.css']
})
export class EditarProtocolosComponent implements OnInit {
id:number
  constructor(private aRoute:ActivatedRoute){

    this.id = +this.aRoute.snapshot.paramMap.get('numIdProtocolo')
  }

  ngOnInit(): void {
    console.log(this.id)
  }

}
