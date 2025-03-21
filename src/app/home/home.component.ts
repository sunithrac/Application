import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { CartService } from '../cart/cart/cart.service';
import { products } from '../shared/interface/product';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public productList: products[] = [];
  public cartCount = 0;

  constructor(private homeService: HomeService, private cartService: CartService, private authService: AuthService) {
  }

  ngOnInit() {
    this.cartService.updateCart().subscribe(cartItems => {
      this.cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    });
    this.homeService.getProductList().subscribe({
      next: (data) => {
        this.productList = data;
      },
      error: (err) => console.error('Error fetching JSON:', err)
    });
  }

  public addToCart(productId: products) {
    this.cartService.addToCart(productId);
  }

  public removeFromCart(productId: products) {
    this.cartService.removeFromCart(productId);
  }

  public logout() {
    this.authService.logout();
  }
}
