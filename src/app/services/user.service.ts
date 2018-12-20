import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly _URL = 'https://reqres.in/api';

  constructor(private _http: HttpClient) { }

  findAll(): Observable<User[]> {
      return this._http.get(this._URL + '/users?per_page=10')
      .pipe(
        map((result: any) => result.data)
      );
  }

  findById(id: Number): Observable<User> {
    const url = this._URL + '/users/' + id;
    return this._http.get(url)
      .pipe(
        map((result: any) => result.data)
      );
  }
}
