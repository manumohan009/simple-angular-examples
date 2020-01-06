import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isSelected: boolean;
  @Output('change') change = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.isSelected);
  }

  onClick(){
    this.isSelected = ! this.isSelected;
    this.change.emit(this.isSelected);
  }

}
