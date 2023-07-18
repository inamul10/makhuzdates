import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartCount: any;

  constructor() { }

  cartItems: any[] = [];

  addToCart(Dates: any) {
    this.cartItems.push(Dates);
    this.cartCount = this.cartItems.length;
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  getCartItems() {

    return this.cartItems ;
  }

  getCartCount() {
    return this.cartCount;
  }

  cartTotal(){
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    
  }
}
