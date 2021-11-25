import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataStorage } from '../models/dataStorage';

@Injectable({
  providedIn: 'root'
})
export class CreatePdfService {
  myAppUrl: string;
  myApiUrl: string;


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl= '/api/PDF_Generator'
   }

createPdf(dataStorage: DataStorage ):any{
  return this.http.post(this.myAppUrl+this.myApiUrl, dataStorage, {responseType:'blob'})
}

}
