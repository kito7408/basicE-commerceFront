import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://backtestsonr.herokuapp.com/users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getById(id: number): Observable<User> {
    const newUrl = this.url + '/' + id;
    return this.http.get<User>(newUrl);
  }

  save(user: User):Observable<User>{
    return this.http.post<User>(this.url,user);
  }

  update(user: User): Observable<User> {
    const newUrl = this.url + '/' + user.id;
    return this.http.put<User>(newUrl,user);
  }

  delete(id: number): Observable<User> {
    const newUrl = this.url + '/' + id;
    return this.http.delete<User>(newUrl);
  }

  login(user: string, pass: string): Observable<any> {
    const newUrl = this.url + '/login';
    var userData = {
      username: user,
      password: pass
    }
    return this.http.post<any>(newUrl, userData);
  }
}
