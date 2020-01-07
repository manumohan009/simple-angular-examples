import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero molestias a quis excepturi architecto dolorem est ipsa beatae reprehenderit quaerat nesciunt dicta nostrum officiis, in minus voluptas nam expedita illum.';
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };
  constructor() { }

  ngOnInit() {
  }

}
