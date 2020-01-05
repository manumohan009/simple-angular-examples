import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  // getOrders() { 
  //   return this.http.get('/api/orders')
  //     .map(response => response.json());
  // }
}
