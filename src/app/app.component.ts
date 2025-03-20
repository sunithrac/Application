import { Component, OnInit } from '@angular/core';
import { CartService } from './cart/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cartCount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.updateCart().subscribe(cartItems => {
      this.cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    });
  }
}
