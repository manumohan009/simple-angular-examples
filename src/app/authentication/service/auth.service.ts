import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  get currentUser(){
    const token = localStorage.getItem('token');
    if(!token) return null;
    const jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(token)
  }
  login(credentials) {
    return this.http.post('/api/authenticate', credentials).pipe(
      tap(_ => console.log(credentials)),
      map((credential: any) => {
        if (credential && credential.token) {
          localStorage.setItem('token', credential.token);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    // return tokenNotExpired();
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');

    if (!token) {
      return null;
    }

    const expirationDate = jwtHelper.getTokenExpirationDate(token);
    const isExpired = jwtHelper.isTokenExpired(token);
    return !isExpired;
  }


}
