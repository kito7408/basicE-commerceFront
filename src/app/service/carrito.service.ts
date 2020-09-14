import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarritoGet } from '../classes/carritoGet';
import { CarritoPost } from '../classes/carritoPost';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private url = 'api/carrito';

  constructor(private http: HttpClient) { }

  getAll(): Observable<CarritoGet[]>{
    return this.http.get<CarritoGet[]>(this.url);
  }

  getById(id: number): Observable<CarritoGet> {
    const newUrl = this.url + '/' + id;
    return this.http.get<CarritoGet>(newUrl);
  }

  getByUserId(id: number): Observable<CarritoGet[]> {
    const newUrl = this.url + '/user/' + id;
    return this.http.get<CarritoGet[]>(newUrl);
  }

  save(item: CarritoPost):Observable<CarritoPost>{
    return this.http.post<CarritoPost>(this.url, item);
  }

  update(item: CarritoPost): Observable<CarritoPost> {
    const newUrl = this.url + '/' + item.id;
    return this.http.put<CarritoPost>(newUrl,item);
  }

  delete(id: number): Observable<CarritoPost> {
    const newUrl = this.url + '/' + id;
    return this.http.delete<CarritoPost>(newUrl);
  }
}
