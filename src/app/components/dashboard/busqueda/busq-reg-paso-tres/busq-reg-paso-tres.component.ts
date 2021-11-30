import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-busq-reg-paso-tres',
  templateUrl: './busq-reg-paso-tres.component.html',
  styleUrls: ['./busq-reg-paso-tres.component.css']
})
export class BusqRegPasoTresComponent implements OnInit {
id:number;
datoRegistro:any=[];
  constructor(private aRoute:ActivatedRoute,
              private RegistroService:RegistroService) 
              { 
                this.id = +this.aRoute.snapshot.paramMap.get('numReg')
              }

  ngOnInit(): void {
    this.getRegById(this.id);
  }


getRegById(id){
  this.RegistroService.getRegistroById(id).subscribe(data=>{
    this.datoRegistro = data;
    console.log(this.datoRegistro)
  })
}
//va para atras
back(){
  window.history.back();
}

}
