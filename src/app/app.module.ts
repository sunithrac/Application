import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { CartComponent } from './cart/cart/cart.component';
import { CartService } from './cart/cart/cart.service';
import { CartRoutingModule } from './cart/cart/cart.routing.module';
import { HttpListenerInterceptor } from './core/interceptor/http-listener.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HomeModule,
    LoginModule,
    MatCardModule,
    HttpClientModule,
    CartRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpListenerInterceptor,
      multi: true
    },
    CartService
  ],
  bootstrap: [AppComponent],
  exports: [CartComponent]
})
export class AppModule { }
