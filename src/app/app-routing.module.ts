import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './authentication/home/home.component';
import { AdminComponent } from './authentication/admin/admin.component';
import { LoginComponent } from './authentication/login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { MyRxjsComponent } from './rxjs-example/my-rxjs/my-rxjs.component';
import { HttpClientComponent } from './http-example/http-client/http-client.component';
import { IndexAppComponent } from './index-app/index-app.component';
import { ConsumeHttpComponent } from './consume-http/consume-http.component';
import { RxjsHttpClientComponent } from './rxjs-example/rxjs-http-client/rxjs-http-client.component';
import { RxjsSimpleExamplesComponent } from './rxjs-example/rxjs-simple-examples/rxjs-simple-examples.component';
import { AcompComponent } from './rxjs-example/rxjs-data-exchange/acomp/acomp.component';
import { BcompComponent } from './rxjs-example/rxjs-data-exchange/bcomp/bcomp.component';
import { AuthGuard } from './authentication/service/auth-guard.service';
import { AdminAuthGuard } from './authentication/service/admin-auth-guard.service';
import { ReusableExampleComponent } from './reusable-component/reusable-example/reusable-example.component';
import { ScoreCounterNoNgrxComponent } from './score-counter/score-counter-no-ngrx/score-counter-no-ngrx.component';


const routes: Routes = [
  {
    path: '',
    component: IndexAppComponent
  },
  {
    path: 'basics',
    loadChildren: './basics/basics.module#BasicsModule'
  },
  {
    path: 'index',
    component: IndexAppComponent

  },
  {
    path: 'score-counter-app',
    component: ScoreCounterNoNgrxComponent

  },
  {
    path: 'reusable-component',
    component: ReusableExampleComponent

  },
  {
    path: 'authentication',
    component: HomeComponent

  },
  {
    path: 'http-example',
    component: HttpClientComponent
  },
  {
    path: 'rxjs-example',
    component: MyRxjsComponent
  },
  {
    path: 'rxjs-simple-example',
    component: RxjsSimpleExamplesComponent
  },
  {
    path: 'rxjs-http-client',
    component: RxjsHttpClientComponent
  },
  {
    path: 'acomp',
    component: AcompComponent
  },
  {
    path: 'bcomp',
    component: BcompComponent
  },
  {
    path: 'consume-http',
    component: ConsumeHttpComponent
  },
  // { path: '', component: HomeComponent },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'no-access',
    component: NoAccessComponent
  },
  {
    path: '**',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
