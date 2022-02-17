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
   getFuncionarioId(id:number):Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl+'/funcionarioId/'+id)
   }
   getFuncionarioTodos():Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl+'/getFuncionarioTodos')
   }
   getFuncionarioRut(rut:string):Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl+'/getFuncionarioRut'+rut)
   }
   eliminaFuncionario(id:number):Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl+'/'+id)
   }
   actualizaFuncionario(funcionario:Funcionario):Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl, funcionario)
   }
}
