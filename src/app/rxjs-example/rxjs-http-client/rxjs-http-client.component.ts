import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RxjsPostService } from './../rxjs-services/rxjs-post.service';

@Component({
  selector: 'app-rxjs-http-client',
  templateUrl: './rxjs-http-client.component.html',
  styleUrls: ['./rxjs-http-client.component.css']
})
export class RxjsHttpClientComponent implements OnInit {
  posts: any[] = [];
  post: null;
  constructor(private http: HttpClient, private rxjsPostService: RxjsPostService) { }

  ngOnInit() {
    this.rxjsPostService.getPosts()
      .subscribe((res: any) => {
        this.posts = res;
        console.log(this.posts);
      }, err => {
        console.log(err);
      });

    this.rxjsPostService.getPost(1)
      .subscribe((res: any) => {
        this.post = res;
        console.log(this.post);
      }, err => {
        console.log(err);
      });
  }

}
