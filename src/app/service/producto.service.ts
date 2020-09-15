import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../classes/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = 'https://backtestsonr.herokuapp.com/productos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }

  getById(id: number): Observable<Producto> {
    const newUrl = this.url + '/' + id;
    return this.http.get<Producto>(newUrl);
  }

  getByCategoriaId(id: number): Observable<Producto[]> {
    const newUrl = this.url + '/categoria/' + id;
    return this.http.get<Producto[]>(newUrl);
  }

  getBySearch(searchText: string): Observable<Producto[]> {
    const newUrl = this.url + '/search?nombre=' + searchText;
    return this.http.get<Producto[]>(newUrl);
  }

  save(producto: Producto):Observable<Producto>{

    const formData: FormData = new FormData();
    formData.append('imagen', producto.imagen);
    formData.append('nombre', producto.nombre);
    formData.append('categoriaId', producto.categoriaId.toString());
    formData.append('precio', producto.precio.toString());
    formData.append('descripcion',  producto.descripcion);

    return this.http.post<Producto>(this.url, formData);
  }

  update(producto: Producto): Observable<Producto> {
    const newUrl = this.url + '/' + producto.id;
    return this.http.put<Producto>(newUrl,producto);
  }

  delete(id: number): Observable<Producto> {
    const newUrl = this.url + '/' + id;
    return this.http.delete<Producto>(newUrl);
  }
}
