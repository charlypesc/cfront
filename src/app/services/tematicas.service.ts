import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tematicas } from '../models/tematicas';

@Injectable({
  providedIn: 'root'
})
export class TematicasService {
  myAppUrl:string;
  myApiUrl:string;
  constructor(private http: HttpClient) { 
    this.myAppUrl=environment.endpoint
    this.myApiUrl='/api/Tematicas';
  }

  guardarTematica(tematica: Tematicas):Observable<any>{
    return this.http.post(this.myAppUrl+this.myApiUrl, tematica);
  }

}
