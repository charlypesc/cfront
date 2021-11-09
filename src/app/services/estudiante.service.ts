import { HttpClient } from '@angular/common/http';
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
    this.myApiUrl = '/api/Estudiante'
   }

   guardarEstudiante(estudiante: Estudiante): Observable<any>{
     return this.http.post(this.myAppUrl + this.myApiUrl, estudiante);
   }
}
