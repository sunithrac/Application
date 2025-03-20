import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    private cartItems: any[] = [];
    private cartSubject = new BehaviorSubject<any[]>([]);
    private cart$ = this.cartSubject.asObservable();

    public updateCart() {
        this.cartSubject.next([...this.cartItems]);
        return this.cart$;
    }

    public listcartItems() {
        return this.cart$;
    }

    public addToCart(product: any) {
        const item = this.cartItems.find(item => item.id === product.id);
        item ? item.quantity++ : this.cartItems.push({ ...product, quantity: 1 });
        this.updateCart();
    }

    public removeFromCart(product: any) {
        this.cartItems = this.cartItems
            .map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)
            .filter(item => item.quantity > 0);
        this.updateCart();
    }

    public clearCart() {
        this.cartItems = [];
        this.updateCart();
    }
}