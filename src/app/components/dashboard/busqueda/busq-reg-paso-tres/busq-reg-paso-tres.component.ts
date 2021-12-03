import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DataStorage } from 'src/app/models/dataStorage';
import { CreatePdfService } from 'src/app/services/create-pdf.service';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-busq-reg-paso-tres',
  templateUrl: './busq-reg-paso-tres.component.html',
  styleUrls: ['./busq-reg-paso-tres.component.css']
})
export class BusqRegPasoTresComponent implements OnInit {
id:number;
datoRegistro:any=[];
html:any;
loading:boolean

@ViewChild('detalle') detalle:ElementRef;
@ViewChild('datosRegistro') datosregistro:ElementRef;
@ViewChild('tablaParticipantes') tablaParticipante:ElementRef;
@ViewChild('antecedentesAcuerdos') antencedentesAcuerdos:ElementRef;
@ViewChild('tablaProtocolos') tablaProtocolos:ElementRef;

  constructor(private aRoute:ActivatedRoute,
              private RegistroService:RegistroService,
              private createPdfService: CreatePdfService) 
              { 
                this.id = +this.aRoute.snapshot.paramMap.get('numReg')
                this.loading=false;
              }

  ngOnInit(): void {
    this.getRegById(this.id);
  }


getRegById(id){
  this.RegistroService.getRegistroById(id).subscribe(data=>{
    this.datoRegistro = data;

  })
}
//va para atras
back(){
  window.history.back();
}

generarPdf(){
  console.log(this.tablaParticipante.nativeElement)
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
