import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly httpClient:HttpClient) { }

  url: string = 'http://localhost:3000'

  getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${this.url}/users`)
  }

  createUser(user: Users){
    return this.httpClient.post<Users>(`${this.url}/users/create`, user);
  }

}
