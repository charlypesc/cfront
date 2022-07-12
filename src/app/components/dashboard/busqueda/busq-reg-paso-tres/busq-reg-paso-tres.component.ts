import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DataStorage } from 'src/app/models/dataStorage';
import { CreatePdfService } from 'src/app/services/create-pdf.service';
import { LoginService } from 'src/app/services/login.service';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-busq-reg-paso-tres',
  templateUrl: './busq-reg-paso-tres.component.html',
  styleUrls: ['./busq-reg-paso-tres.component.css']
})
export class BusqRegPasoTresComponent implements OnInit {
id:number;
ruta:number=1;
datoRegistro:any=[];
html:any;
loading:boolean
funcionario:any;

@ViewChild('detalle') detalle:ElementRef;
@ViewChild('datosRegistro') datosregistro:ElementRef;
@ViewChild('tablaParticipantes') tablaParticipante:ElementRef;
@ViewChild('antecedentesAcuerdos') antencedentesAcuerdos:ElementRef;
@ViewChild('tablaProtocolos') tablaProtocolos:ElementRef;

  constructor(private aRoute:ActivatedRoute,
              private loginService:LoginService,
              private RegistroService:RegistroService,
              private createPdfService: CreatePdfService) 
              { 
                this.id = +this.aRoute.snapshot.paramMap.get('numReg')
                this.ruta = +this.aRoute.snapshot.paramMap.get('ruta')
                this.loading=false;
              }

  ngOnInit(): void {
    this.getRegById(this.id);
    // console.log(this.ruta)
    this.funcionarioBusca();
  }

  funcionarioBusca(){
    this.funcionario=this.loginService.getTokenDecoded().sub;
  }

getRegById(id){
  this.RegistroService.getRegistroById(id).subscribe(data=>{
    this.datoRegistro = data;
    console.log(data)
  })
}
//va para atras
back(){
  window.history.back();
}

generarPdf(){
  
  this.loading=true;
  this.html=btoa(unescape(encodeURIComponent(this.detalle.nativeElement.innerHTML
                                            +this.tablaParticipante.nativeElement.innerHTML
                                            +this.datosregistro.nativeElement.innerHTML
                                            +this.antencedentesAcuerdos.nativeElement.innerHTML
                                            +this.tablaProtocolos.nativeElement.innerHTML)))
  const pdf : DataStorage = {
    fromHtmlToPdf:this.html
  }

  this.createPdfService.createPdf(pdf).subscribe(data=>{
    var blob = new Blob([data],{type:data.type})
    var url = window.URL.createObjectURL(blob)
    this.loading=false;
    window.open(url)
  })

}

}
