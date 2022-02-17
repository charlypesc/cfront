import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Establecimiento } from '../models/establecimiento';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientoService {
  myAppUrl : string;
  myApiUrl : string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Establecimiento'
   }

   guardarEstablecimiento(establecimiento: Establecimiento): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, establecimiento);
  }
    getEstablecimientos():Observable<any>{
      return this.http.get(this.myAppUrl + this.myApiUrl+'/getEstablecimientos')
    }
    getEstablecimientoById(id:number):Observable<any>{
      return this.http.get(this.myAppUrl + this.myApiUrl+'/getEstablecimientos/'+id)
    }
    editaEstablecimiento(establecimiento:Establecimiento):Observable<any>{
      return this.http.put(this.myAppUrl+this.myApiUrl+'/', establecimiento);
    }
    eliminaEstablecimiento(id):Observable<any>{
      return this.http.delete(this.myAppUrl+this.myApiUrl+'/'+id);
    }

}
