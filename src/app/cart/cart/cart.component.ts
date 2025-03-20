import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  public cartItems: any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.listcartItems().subscribe(list => {
      this.cartItems = list;
    });
  }

  public removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}
