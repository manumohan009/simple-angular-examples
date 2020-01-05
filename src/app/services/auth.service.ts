import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(credentials) { 
    console.log(credentials);
  //  return this.http.post('/api/authenticate', JSON.stringify(credentials));
   return this.http.post('/api/authenticate', credentials);
  }

  logout() { 
  }

  isLoggedIn() { 
    return false;
  }
}
