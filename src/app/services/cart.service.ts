import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Card } from '../shared/models/Card';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  constructor() {}

  addToCart(card: Card): void {
    let cartItem = this.cart.items.find((item) => item.card.id === card.id);
    if (cartItem) {
      this.changeQuantity(card.id, cartItem.quantity + 1);
      return;
    }

    this.cart.items.push(new CartItem(card));
  }

  removeFromCart(cardId: number) {
    this.cart.items = this.cart.items.filter((item) => item.card.id != cardId);
  }

  changeQuantity(cardId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.card.id === cardId);

    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
