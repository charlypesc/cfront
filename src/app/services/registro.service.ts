import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Registro } from '../models/registro';

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
    this.myApiUrl='/api/Registro';
  }



  guardarRegistro(registro: Registro): Observable<any> {

    const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type':'application/json',
        'charset':'utf-8'
     }) 
    }
    console.log('llegamos al service del registro')
    console.log(registro)
    return this.http.post(this.myAppUrl+this.myApiUrl, registro, httpOptions)
  }
}
    
