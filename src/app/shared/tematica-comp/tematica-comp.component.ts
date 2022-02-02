import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { TematicasReg } from 'src/app/models/tematicasReg';
import { LoginService } from 'src/app/services/login.service';
import { TematicasService } from 'src/app/services/tematicas.service';

@Component({
  selector: 'app-tematica-comp',
  templateUrl: './tematica-comp.component.html',
  styleUrls: ['./tematica-comp.component.css']
})
export class TematicaCompComponent implements OnInit {
  lstStaticData:any;
  selectTematicas:number[];
  rbd: string;
  tematicasReg:any;
  temporalTematicas:Array<any>=[]
  constructor(private loginService:LoginService,
              private tematicasService:TematicasService) { }

  ngOnInit(){
    this.rbd = this.loginService.getTokenDecoded().Rbd;
    this.cargarTematicas();
    this.selectTematicas = new Array <number>();
  }

  
// - - - - - M E T O D O S   T  E M A T I C A S - - - - - 

  cargarTematicas(){
    this.tematicasService.getTematicas(this.rbd).subscribe(data=>{
      this.lstStaticData=data;
      
    })
  }
  getTematicaId(e:any, id:number, tematica:string)
  {
    

    if(e.target.checked)
    {
      this.selectTematicas.push(id)
      console.log(this.selectTematicas)
      this.createTematicaObjTemp(id)
      this.tematicasService.lstDataTematica=this.temporalTematicas;
    }else
    {
      this.selectTematicas = this.selectTematicas.filter(m=>m!=id)//LOGICA: metodo crea un nuevo array que llena con elementos provistas por la funcion (funcion no llena el array con el elemento coincidente)
      this.deleteTematica(id);
      this.tematicasService.lstDataTematica=this.temporalTematicas;
      
    }
 
  }
  createTematicaObjTemp(id:number){
    this.temporalTematicas.push(this.lstStaticData[id])
   
  }
  deleteTematica(inde:number){
    this.temporalTematicas.splice(inde,inde+1)
  }   
}