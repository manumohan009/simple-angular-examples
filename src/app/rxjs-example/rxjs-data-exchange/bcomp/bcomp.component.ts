import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RxjsSharedService } from '../rxjs-shared.service';

@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.css']
})
export class BcompComponent implements OnInit {
  data: any;
  constructor(private router: Router, private sharedData: RxjsSharedService) { }

  ngOnInit() {
    this.sharedData.currentData.subscribe(data => this.data = data);
  }

  changeData() {
    this.sharedData.changeData({name: 'Romario Varia'});
    this.router.navigate(['/acomp']);
  }

}
