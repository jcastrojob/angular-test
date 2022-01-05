import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { handleError } from './error.handle'

const URLBASE = 'https://jsonplaceholder.typicode.com/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<User[]>(URLBASE).pipe(
      retry(1),
      catchError(handleError)
    );
  }
  
  getById(userId: number) {
    return this.http.get<User>(`${URLBASE}/${userId}`).pipe(
      retry(1),
      catchError(handleError)
    );
  }

}
