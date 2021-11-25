import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataStorage } from 'src/app/models/dataStorage';
import { CreatePdfService } from 'src/app/services/create-pdf.service';


@Component({
  selector: 'app-reuniones-actas',
  templateUrl: './reuniones-actas.component.html',
  styleUrls: ['./reuniones-actas.component.css']
})
export class ReunionesActasComponent implements OnInit {
html:any;
@ViewChild('tabla') title: ElementRef;
  
constructor(private CreatePdfService: CreatePdfService) { }

  ngOnInit(): void {
  }

view(){
  console.log(this.title.nativeElement)
  this.html= btoa(unescape(encodeURIComponent(this.title.nativeElement.innerHTML)))
  console.log(this.html);

  const pdf :  DataStorage = {
    fromHtmlToPdf : this.html
  }
  this.CreatePdfService.createPdf(pdf).subscribe(data =>{
    console.log(data);
     var blob = new Blob([data],{type:data.type})
     var url = window.URL.createObjectURL(blob)
     window.open(url)
     
  });
}
}
