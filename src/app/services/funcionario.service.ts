import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Funcionario } from '../models/funcionario';
@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  myAppUrl : string;
  myApiUrl : string;
  
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Funcionario';
   }

   guardarFuncionario(funcionario:Funcionario): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, funcionario);
   }
}
