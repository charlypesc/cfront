import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Seguimiento } from '../models/seguimiento';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {
  myAppUrl : string;
  myApiUrl : string;
  constructor
    (
      private http: HttpClient
    ) 
    {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Seguimiento'
    }
    getListSeguimientoRut(rut:string){
      return this.http.get(this.myAppUrl+this.myApiUrl+'/getListSeguimiento/'+rut);
    }
    
    createSeguimiento(seguimiento: Seguimiento){
      return this.http.post(this.myAppUrl+this.myApiUrl, seguimiento);
    }

}
