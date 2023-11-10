import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './user.interface'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  APIurl: string = 'https://jsonplaceholder.typicode.com/users'; 

  constructor(private http:HttpClient) {}

  getList(): Observable<User[]> {
    return this.http.get<User[]>(this.APIurl);
  }

  getById(id: number | string | null): Observable<User> {
    return this.http.get<User>(this.APIurl + '/' + id);
  }

}


