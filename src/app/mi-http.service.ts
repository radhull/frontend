import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MiHttpService {
  public url = 'http://localhost:5000/api/';
  constructor(public http: HttpClient) { }

  getLogin(): Observable<any> {
    return this.http.get(this.url + 'Autentificacion/login');
}

postLogin(loginUser: any): Observable<any> {
  const json = JSON.stringify(loginUser);
  const params = json;
  const headers = new HttpHeaders().set('Content-Type' , 'application/json; charset=utf-8');

  return this.http.post(this.url + 'Autentificacion/login', params, {headers: headers});
}
}
