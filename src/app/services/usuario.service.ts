import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  myAppUrl:string;
  myApiUrl:string;

  constructor(private http: HttpClient) { }
  saveUser(usuario : Usuario){
    this.myAppUrl='localhost';
    this.myApiUrl='api/Usuario';
  }
}
