import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Denuncia } from '../models/denuncia';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {
  myAppUrl:string;
  myApiUrl:string;

  constructor(private http:HttpClient) { 
    
    this.myAppUrl=environment.endpoint
    this.myApiUrl='/api/Denuncia';
  }

  guardarDenuncia(denuncia:Denuncia):Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, denuncia);
  }
  getDenunciaById(id:number):Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl+"/DenunciaId/"+id);
  }
  updateDenuncia(denuncia: Denuncia): Observable<any>{
    return this.http.put(this.myAppUrl+this.myApiUrl, denuncia)
  }
  getDenuncia(id:number){
    return this.http.get(this.myAppUrl+this.myApiUrl+"/"+id)
  }
  getDenunciaRut(rut:string){
    return this.http.get(this.myAppUrl+this.myApiUrl+"/denunciaRut/"+rut)
  }
}
