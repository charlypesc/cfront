import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

myAppUrl: string;
myApiUrl: string;
data:string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl= '/api/Login'
   }

   login(usuario: Usuario): Observable<any>{
     return this.http.post(this.myAppUrl+this.myApiUrl, usuario)
   }
   getTokenRefresh():Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl+'/getIdUsuario');
   }
   setLocalStorage(data):void{
      localStorage.setItem('token', data);
   }
    getTokenDecoded():any{
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(localStorage.getItem('token'))
      return decodedToken;
    }

   removeLocalStorage():void{
     localStorage.removeItem('token');
   }


}
