import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReunionesService } from 'src/app/services/reuniones.service';

@Component({
  selector: 'app-busq-tab-reun',
  templateUrl: './busq-tab-reun.component.html',
  styleUrls: ['./busq-tab-reun.component.css']
})
export class BusqTabReunComponent implements OnInit { 
  listadoRegistros:any=[];
  rutParam:string;

  constructor(private aRoute:ActivatedRoute,
              private reunionesService:ReunionesService,
              private router:Router   ) { 
                
                this.rutParam = this.aRoute.snapshot.paramMap.get('rut')

              }

  ngOnInit(): void {
  
    this.getReunionRut();
  
  }

getNumRegistro(i:number){
  this.router.navigate(['dashboard/reuniones/reupasotres/'+i])
}

getReunionRut(){
  this.reunionesService.getReunionByRut(this.rutParam).subscribe(data=>{
    this.listadoRegistros=data;
    console.log(data);
  })
}

}
