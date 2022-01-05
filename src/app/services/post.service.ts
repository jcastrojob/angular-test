import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { handleError } from './error.handle'

const URLBASE = 'https://jsonplaceholder.typicode.com/posts'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  get(): Observable<Post[]> {
    return this.http.get<Post[]>(URLBASE)
      .pipe(
        retry(1),
        catchError(handleError)
      );
  }

  getById(id: string) {
    return this.http.get<Post>(`${URLBASE}/${id}`)
      .pipe(
        retry(1),
        catchError(handleError)
      );
  }

  update(post: Post) {
    return this.http.put<Post>(`${URLBASE}/${post.id}`, post)
      .pipe(
        retry(1),
        catchError(handleError)
      );
  }

  create(post: Post) {
    return this.http.post<Post>(URLBASE, post)
      .pipe(
        retry(1),
        catchError(handleError)
      );
  }


}
