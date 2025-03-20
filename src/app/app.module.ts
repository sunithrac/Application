import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from "@angular/material/table";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { CartComponent } from './cart/cart/cart.component';
import { CartService } from './cart/cart/cart.service';
import { CartRoutingModule } from './cart/cart/cart.routing.module';

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
  providers: [ CartService],
  bootstrap: [AppComponent],
  exports: [CartComponent]
})
export class AppModule { }
