import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  myAppUrl:string;
  myApiUrl:string;

  constructor(private http: HttpClient) { 
    this.myAppUrl= environment.endpoint;
    this.myApiUrl='/api/Usuario';
  }
  saveUser(usuario : Usuario):Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  }

  changePassword(changePassword): Observable<any>{
    return this.http.put(this.myAppUrl+this.myApiUrl+'/CambiarPassword', changePassword);
  }
  getUsuarioRbd():Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl+'/getUsuarioRbd')
  }
  eliminaUsuario(id:number):Observable<any>{
    return this.http.delete(this.myAppUrl+this.myApiUrl+'/BorrraUsuario/'+id)
  }
}
