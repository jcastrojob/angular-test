import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  get() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return this.http.get<Post[]>(url);
  }

  getById(id: string) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    return this.http.get<Post>(url);
  }

  update(post: Post) {
    const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`
    return this.http.put<Post>(url, post);
  }

  create(post: Post) {
    const url = `https://jsonplaceholder.typicode.com/posts`
    return this.http.post<Post>(url, post);
  }
}
