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
  httpOptions:any={};
  rut:string;
  id:number;
  apiUrlregisterById:string;
  constructor(private http:HttpClient) { 

    this.myAppUrl=environment.endpoint
    this.myApiUrl='/api/Registro';
    this.apiUrlregisterById='/getRegistro/'
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

  getRegistros(rut:string):Observable<any>{

    return this.http.get(this.myAppUrl+this.myApiUrl+'/'+rut)
  }

  getRegistroById(id):Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl+this.apiUrlregisterById+id)
  }
  delRegistro(idReg:number):Observable<any>{
    return this.http.delete(this.myAppUrl+this.myApiUrl+'/deleteReg/'+idReg)
  }

  searchFolio(rbd:string):Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl + '/folioRegistro/'+rbd)
  }
}
    
