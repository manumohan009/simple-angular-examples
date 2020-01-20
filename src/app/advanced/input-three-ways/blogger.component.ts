import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.interface';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'bloggers',
    template: `
        <h1>Posts by: {{ blogger }}</h1>
        <h3>Solution 1: ngIf</h3>
        <div *ngIf="posts">
            <posts-1 [data]="posts"></posts-1>
        </div>
        <h3>Solution 2: ngOnChanges</h3>
        <div>
            <posts-2 [data]="posts"></posts-2>
        </div>
        <h3>Solution 3: RxJs BehavourSubject</h3>
        <div>
            <posts-3 [data]="posts"></posts-3>
        </div>
    `
})
export class BloggerComponent implements OnInit {

    blogger = 'Jecelyn';
    posts: Post[];

    constructor(private _http: HttpClient) { }

    ngOnInit() { 
        this.getPostsByBlogger()
            .subscribe(x => this.posts = x);
    }

    getPostsByBlogger() {
        // const url = './../assets/mock-posts.json';
        const url = './assets/mock-posts.json';
        return this._http.get<Post[]>(url).pipe(
            tap(x=>{
                console.log(x);
            })
            // map(x=>{
            //     return x;
            // })
            // map(x => x.json());
        )
            
    }
}