import { Comment } from './../models/comment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { handleError } from './error.handle'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  get(postId: number) {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    return this.http.get<Comment[]>(url).pipe(
      retry(1),
      catchError(handleError)
    );
  }
}
