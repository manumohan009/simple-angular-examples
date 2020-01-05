import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Object> {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url)
  }
  
}
