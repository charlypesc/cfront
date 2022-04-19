import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DenunciaService } from 'src/app/services/denuncia.service';

@Component({
  selector: 'app-busq-tab-denun',
  templateUrl: './busq-tab-denun.component.html',
  styleUrls: ['./busq-tab-denun.component.css']
})
export class BusqTabDenunComponent implements OnInit {


   listadoRegistros:any=[];
   loading=false;
   dato:any={};
   rutParam:string;

  constructor(private aRoute:ActivatedRoute,
              private router:Router,
              private denunciaService: DenunciaService) { 

    this.rutParam = this.aRoute.snapshot.paramMap.get('rut')

  }

ngOnInit(): void {
    this.getDenunciaRut();  
}

  getDenunciaRut(){
      this.denunciaService.getDenunciaRut(this.rutParam).subscribe(data=>{
        this.listadoRegistros=data;
        console.log(data);
      })
    }
    getNumRegistro(i:number){
      this.router.navigate(['/dashboard/denuncia/denunciapasotres/'+i])
  }
}
