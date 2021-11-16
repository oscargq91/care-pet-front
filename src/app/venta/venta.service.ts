import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Venta } from './venta';
import { Producto } from '../productos/producto';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private urlEndPoint: string = 'http://localhost:8080/api/v1/ventas';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http: HttpClient) { }

  createVenta(venta: Producto) : Observable<Venta> {
    return this.http.post<Venta>(this.urlEndPoint, venta, {headers: this.httpHeaders})
  
  }

}
