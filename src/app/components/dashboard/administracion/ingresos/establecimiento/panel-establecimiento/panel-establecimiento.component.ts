import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';

@Component({
  selector: 'app-panel-establecimiento',
  templateUrl: './panel-establecimiento.component.html',
  styleUrls: ['./panel-establecimiento.component.css']
})
export class PanelEstablecimientoComponent implements OnInit {
  establecimientosData:any=[]
  constructor(private router: Router, 
              private establecimientoService: EstablecimientoService) { }

  ngOnInit(): void {

      this.establecimientoService.getEstablecimientos().subscribe(data=>{
        console.log(data);
        this.establecimientosData=data;
      })

  }

}
