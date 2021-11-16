import { Injectable } from '@angular/core';
import { Categoria } from './categoria';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlEndPoint: string = 'http://localhost:8080/api/v1/categorias';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlEndPoint,{headers:this.httpHeaders});
  }

  create(categoria: Categoria) : Observable<Categoria> {
    return this.http.post<Categoria>(this.urlEndPoint, categoria, {headers: this.httpHeaders})
  }

  getCategoria(id: string): Observable<Categoria>{
    return this.http.get<Categoria>(`${this.urlEndPoint}/${id}`)
  }

  update(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(`${this.urlEndPoint}/${categoria.id}`, categoria, {headers: this.httpHeaders})
  }

  delete(id: string): Observable<Categoria>{
    return this.http.delete<Categoria>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
