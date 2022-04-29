import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Programa } from '../models/programa';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {
  myAppUrl:string;
  myApiUrl:string;
  constructor(private http: HttpClient) {
    this.myAppUrl=environment.endpoint
    this.myApiUrl='/api/Programa';
  }

  getListProgramas(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }
  guardarPrograma(programa:Programa ):Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, programa);
  }  
  getProgramaId(id:number): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl+'/getId/'+id);
  }
  updatePrograma(programa: Programa):Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl+'/actualiza', programa);
  }
  deletePrograma(id:number):Observable<any>{
     return this.http.delete(this.myAppUrl + this.myApiUrl+'/'+id);
  }
}
