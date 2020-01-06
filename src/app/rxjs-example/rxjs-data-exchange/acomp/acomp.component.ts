import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RxjsSharedService } from '../rxjs-shared.service';

@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.css']
})
export class AcompComponent implements OnInit {
  data: any;
  constructor(private router: Router, private sharedData: RxjsSharedService) { }

  ngOnInit() {
    this.sharedData.currentData.subscribe(data => this.data = data);
  }
  changeData() {
    this.sharedData.changeData({name: 'Eric Cantona'});
    this.router.navigate(['/bcomp']);
  }

}
