import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProtocolosActuacion } from '../models/protocolosActuacion';

@Injectable({
  providedIn: 'root'
})
export class ProtocolosService {

  myAppUrl:string;
  myApiUrl:string;

  constructor(private http: HttpClient) {
    this.myAppUrl=environment.endpoint
    this.myApiUrl='/api/ProtocoloActuacion';
   }

   guardarProtocolo(protocoloActuacion: ProtocolosActuacion): Observable<any>{
    return this.http.post(this.myAppUrl+this.myApiUrl, protocoloActuacion);
   }
   getProtocolos(rbd): Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl+'/'+rbd);
   }
   deleteProtocolo(idProtocolo): any{
    return this.http.delete(this.myAppUrl+this.myApiUrl+'/'+idProtocolo);
   }

   getProtocoloById(id:number){
    return this.http.get(this.myAppUrl+this.myApiUrl+'/getProtocolo/'+id);
   }

}