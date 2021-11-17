import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  myAppUrl:string;
  myApiUrl:string;
  profesional:string;
  asunto:string;
  fecha:Date;
  
  constructor(private http:HttpClient) { 

    this.myAppUrl=environment.endpoint
    this.myApiUrl='/api/Registro/';
  }


}
