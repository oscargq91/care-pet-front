import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../categorias/categoria';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlEndPoint: string = 'http://localhost:8080/api/v1/productos';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlEndPoint,{headers:this.httpHeaders});
  }

  create(producto: Producto) : Observable<Producto> {
    return this.http.post<Producto>(this.urlEndPoint, producto, {headers: this.httpHeaders})
  }

  getProducto(id: string): Observable<Producto>{
    return this.http.get<Producto>(`${this.urlEndPoint}/${id}`)
  }

  update(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.urlEndPoint}/${producto.id}`, producto, {headers: this.httpHeaders})
  }

  delete(id: string): Observable<Producto>{
    return this.http.delete<Producto>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
