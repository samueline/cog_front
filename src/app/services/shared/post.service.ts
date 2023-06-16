import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePostPayload } from 'src/app/post/create-post/create-post/create-post.payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }

  getAllPost(): Observable<Array<any>>{
    return this.http.get<Array<any>>('http://localhost:8070/api/posts');
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post('http://localhost:8070/api/posts/', postPayload)
  }


  getPost(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:8070/api/posts/' + id);
  }

  getAllPostsByUser(name: string): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8070/api/posts/by-user/' + name);
  }

}
