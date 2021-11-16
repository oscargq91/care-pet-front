import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Servicio } from './servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private urlEndPoint: string = 'http://localhost:8080/api/v1/servicios';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getServicios(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(this.urlEndPoint,{headers:this.httpHeaders});
  }

  create(servicio: Servicio) : Observable<Servicio> {
    return this.http.post<Servicio>(this.urlEndPoint, servicio, {headers: this.httpHeaders})
  }

}
