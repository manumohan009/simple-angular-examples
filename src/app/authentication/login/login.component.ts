import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute ) { }

  signIn(credentials) {
    this.authService.login(credentials).subscribe((result: boolean) => {
      // this.invalidLogin = ! result;
      if (result) {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/authentication']);
      } else {
        this.invalidLogin = true;
      }
    });
  }

  ngOnInit() {
  }

}
