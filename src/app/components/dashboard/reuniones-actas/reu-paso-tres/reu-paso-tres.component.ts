import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from 'src/app/models/dataStorage';
import { CreatePdfService } from 'src/app/services/create-pdf.service';
import { LoginService } from 'src/app/services/login.service';
import { ReunionesService } from 'src/app/services/reuniones.service';

@Component({
  selector: 'app-reu-paso-tres',
  templateUrl: './reu-paso-tres.component.html',
  styleUrls: ['./reu-paso-tres.component.css']
})
export class ReuPasoTresComponent implements OnInit {

  rbd:string;
  idParam:number;
  datosPasoUno:any=[]
  html:any;

  //V I E W   C H I L D S 

@ViewChild('detalle') detalle:ElementRef;


  constructor(private reunionesService:ReunionesService,
              private router:Router,
              private aRoute:ActivatedRoute,
              private loginService:LoginService,
              private createPdfService: CreatePdfService) { }

  ngOnInit(): void {
    this.rescateId();
    this.rbd = this.loginService.getTokenDecoded().Rbd;
    this.getReunion();

  }
//Evaluar llegada desde el componente
  rescateId(){
      var idReunion = this.aRoute.snapshot.paramMap.get('reunionId');
      // console.log(idReunion)
      if( idReunion == "undefined"){
        

      }else{
        this.idParam=parseInt(idReunion);
      }
  }

  getReunion(){
    this.reunionesService.getReunionById(this.idParam).subscribe(data=>{
      this.datosPasoUno=data
      
      // console.log("datos")
      console.log(this.datosPasoUno)
    })
  }

  
    generarPdf(){
      
      // this.loading=true;
      this.html=btoa(unescape(encodeURIComponent(this.detalle.nativeElement.innerHTML)))
      const pdf : DataStorage = {
        fromHtmlToPdf:this.html
      }

      this.createPdfService.createPdfReu(pdf).subscribe(data=>{
        var blob = new Blob([data],{type:data.type})
        var url = window.URL.createObjectURL(blob)
        // this.loading=false;
        window.open(url)
      })

    }

}
