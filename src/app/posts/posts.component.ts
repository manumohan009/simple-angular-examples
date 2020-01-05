import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  posts: any;
  constructor(
    private http: HttpClient,
    private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts=>{
      console.log(posts);
      this.posts = posts;
    })
  }

}
