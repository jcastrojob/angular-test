import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  get() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    return this.http.get<User[]>(url);
  }
  
  getById(userId: number) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`
    return this.http.get<User>(url);
  }

}
