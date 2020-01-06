import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-example',
  templateUrl: './reusable-example.component.html',
  styleUrls: ['./reusable-example.component.css']
})
export class ReusableExampleComponent implements OnInit {

  post = {
    isFavorite: true
  }
  constructor() { }

  ngOnInit() {
  }
  onFavoriteChanged(isFavorite){
    console.log('Favorite changed', isFavorite)
  }

}
