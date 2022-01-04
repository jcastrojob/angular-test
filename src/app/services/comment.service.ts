import { Comment } from './../models/comment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  get(postId: number) {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    return this.http.get<Comment[]>(url);
  }
}
