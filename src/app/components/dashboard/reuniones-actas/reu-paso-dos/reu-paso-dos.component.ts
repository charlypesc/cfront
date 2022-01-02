import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReunionesService } from 'src/app/services/reuniones.service';

@Component({
  selector: 'app-reu-paso-dos',
  templateUrl: './reu-paso-dos.component.html',
  styleUrls: ['./reu-paso-dos.component.css']
})
export class ReuPasoDosComponent implements OnInit {
idParam:number;
datosPasoUno:any={}
  constructor(private aRoute:ActivatedRoute,
              private reunionesService:ReunionesService
    ) {
    { 
      var idReunion = this.aRoute.snapshot.paramMap.get('reunionId');
      this.idParam=parseInt(idReunion);
    }
   }

  ngOnInit() {
    this.getReunion();
  }
  getReunion(){
    this.reunionesService.getReunionById(this.idParam).subscribe(data=>{
      this.datosPasoUno=data
      console.log(data)
    })
  }
}
