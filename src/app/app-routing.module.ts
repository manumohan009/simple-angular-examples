import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { MyRxjsComponent } from './rxjs-example/my-rxjs/my-rxjs.component';
import { HttpClientComponent } from './http-example/http-client/http-client.component';
import { MyHomeComponent } from './shared-service/my-home/my-home.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { IndexAppComponent } from './index-app/index-app.component';
import { ConsumeHttpComponent } from './consume-http/consume-http.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
		pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexAppComponent

  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'shared-service',
    component: MyHomeComponent
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
    path: 'consume-http',
    component: ConsumeHttpComponent
  },
  // { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'no-access', component: NoAccessComponent },
  { path: 'posts', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
