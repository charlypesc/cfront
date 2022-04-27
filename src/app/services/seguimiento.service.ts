import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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

}
