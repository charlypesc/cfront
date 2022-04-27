import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  myAppUrl : string;
  myApiUrl : string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Estudiante/'
   }

   guardarEstudiante(estudiante: Estudiante): Observable<any>{
     return this.http.post(this.myAppUrl + this.myApiUrl, estudiante);
   }
   getEstudianteByRut(rutEstudiante:string):Observable<any>{
      return this.http.get(this.myAppUrl + this.myApiUrl + rutEstudiante);
   }
   getEstudianteRbdAno(): Observable<any>{
     return this.http.get(this.myAppUrl + this.myApiUrl +'getEstudiantes');
   }
   getEstudianteRbdCurso(curso:string):Observable<any>{
     return this.http.get(this.myAppUrl + this.myApiUrl +'getEstudiantes'+'/'+ curso)
   }
   getEstudianteById(id:number):Observable<any>{
     return this.http.get(this.myAppUrl + this.myApiUrl +'getEstudianteId/'+ id)
   }
   deleteEstudianteById(){

   }
   updateEstudianteById(estudiante:Estudiante):Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl, estudiante)
   }
   getEnSeguimiento(): Observable<any>{
     return this.http.get(this.myAppUrl + this.myApiUrl + 'getSiguiendo');
   }
}
