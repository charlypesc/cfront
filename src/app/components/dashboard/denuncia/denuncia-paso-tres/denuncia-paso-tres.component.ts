import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from 'src/app/models/dataStorage';
import { CreatePdfService } from 'src/app/services/create-pdf.service';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-denuncia-paso-tres',
  templateUrl: './denuncia-paso-tres.component.html',
  styleUrls: ['./denuncia-paso-tres.component.css']
})
export class DenunciaPasoTresComponent implements OnInit {

id:number;
datosDenuncia:any;
datos:any=[]
rutReg:string;
html:any;

@ViewChild('detalle') detalle:ElementRef;


//detalle Estudiante
nombreEstudiante:string;
rutEstudiante:string;
apoderado:string
curso:string
direccionApoderado:string
constructor(private aRoute:ActivatedRoute,
            private denunciaService: DenunciaService,
            private router:Router,
            private estudianteService: EstudianteService,
            private createPdfService: CreatePdfService) { 
            
              this.id = +this.aRoute.snapshot.paramMap.get('denunciaId')    
            
            }
            
  ngOnInit() {
  console.log(this.id)
  this.getDenunciaById();
  
  }
  ngOnDestroy(){
    this.router.navigate(['/dashboard'])
  }

  getDenunciaById(){
    this.denunciaService.getDenuncia(this.id).subscribe(data=>{
      this.datosDenuncia=data;
      this.rutEstudiante=this.datosDenuncia[0].rutAsociado
      console.log(this.datosDenuncia)
      this.getDatosEstudiante();
    })
  }
  getDatosEstudiante(){
    this.estudianteService.getEstudianteByRut(this.rutEstudiante).subscribe(data=>{
      
      console.log(data)
      this.nombreEstudiante=data.nombre
      this.apoderado=data.apoderado
      this.curso=data.curso
      this.direccionApoderado=data.direccionApoderado
      this.datos=data
      console.log(this.datos)
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
