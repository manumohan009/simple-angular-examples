import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './authentication/home/home.component';
import { AdminComponent } from './authentication/admin/admin.component';
import { LoginComponent } from './authentication/login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './authentication/service/auth.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MyRxjsComponent } from './rxjs-example/my-rxjs/my-rxjs.component';
import { HttpClientComponent } from './http-example/http-client/http-client.component';
import { ConsumeHttpComponent } from './consume-http/consume-http.component';
import { ProductsComponent } from './products/products.component';
import { IndexAppComponent } from './index-app/index-app.component';
import { RxjsObserveTimerComponent } from './rxjs-example/rxjs-observe-timer/rxjs-observe-timer.component';
import { RxjsHttpClientComponent } from './rxjs-example/rxjs-http-client/rxjs-http-client.component';
import { RxjsSimpleExamplesComponent } from './rxjs-example/rxjs-simple-examples/rxjs-simple-examples.component';
import { AcompComponent } from './rxjs-example/rxjs-data-exchange/acomp/acomp.component';
import { BcompComponent } from './rxjs-example/rxjs-data-exchange/bcomp/bcomp.component';
import { ReusableExampleComponent } from './reusable-component/reusable-example/reusable-example.component';
import { FavoriteComponent } from './reusable-component/favorite/favorite.component';
import { PanelComponent } from './reusable-component/panel/panel.component';
import { ScoreCounterNoNgrxComponent } from './score-counter/score-counter-no-ngrx/score-counter-no-ngrx.component';
import { CounterModule } from './score-counter/counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent,
    NotFoundComponent,
    MyRxjsComponent,
    HttpClientComponent,
    AppComponent,
    HomeComponent,
    ConsumeHttpComponent,
    ProductsComponent,
    HttpClientComponent,
    IndexAppComponent,
    RxjsObserveTimerComponent,
    RxjsHttpClientComponent,
    RxjsSimpleExamplesComponent,
    AcompComponent,
    BcompComponent,
    FavoriteComponent,
    ReusableExampleComponent,
    PanelComponent,
    ScoreCounterNoNgrxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CounterModule
  ],
  providers: [
    AuthService,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
