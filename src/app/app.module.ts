import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { PostService } from './services/post.service';
import { MyRxjsComponent } from './rxjs-example/my-rxjs/my-rxjs.component';
import { HttpClientComponent } from './http-example/http-client/http-client.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { MyHomeComponent } from './shared-service/my-home/my-home.component';
import { ConsumeHttpComponent } from './consume-http/consume-http.component';
import { ProductsComponent } from './products/products.component';
import { Child1Component } from './parent-child/child1/child1.component';
import { Child2Component } from './parent-child/child2/child2.component';
import { MyChild1Component } from './shared-service/my-child1/my-child1.component';
import { MyChild2Component } from './shared-service/my-child2/my-child2.component';
import { IndexAppComponent } from './index-app/index-app.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent,
    NotFoundComponent,
    MyRxjsComponent,
    HttpClientComponent,
    ParentComponent,
    MyHomeComponent,
    AppComponent,
    HomeComponent,
    ConsumeHttpComponent,
    ProductsComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    MyHomeComponent,
    MyChild1Component,
    MyChild2Component,
    HttpClientComponent,
    IndexAppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    OrderService,
    AuthService,
    PostService,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
