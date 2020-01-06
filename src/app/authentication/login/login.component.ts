import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  // signIn(credentials) {
  //   this.authService.login(credentials)
  //     .subscribe(result => {
  //       if (result && result.token){
  //         this.invalidLogin = false;
  //         localStorage.setItem('token', result.token)
  //         console.log(result)
  //       }
  //       else
  //         this.invalidLogin = true;
  //     });
  // }
  signIn(credentials) {
    this.authService.login(credentials)
  }

  ngOnInit() {
  }

}
