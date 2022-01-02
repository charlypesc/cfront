import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reuniones } from '../models/reuniones';

@Injectable({
  providedIn: 'root'
})
export class ReunionesService {
  myAppUrl : string;
  myApiUrl : string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Reuniones'
   }
   saveReunion(reunion:Reuniones):Observable<any>{
     return this.http.post(this.myAppUrl + this.myApiUrl, reunion);
   }
   getReunionById(idReunion:number):Observable<any>{
     return this.http.get(this.myAppUrl + this.myApiUrl+'/getReunion/'+idReunion)
   }
}