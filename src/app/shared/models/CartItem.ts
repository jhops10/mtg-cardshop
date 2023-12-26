import { Card } from './Card';

export class CartItem {
  constructor(card: Card) {
    this.card = card;
  }

  card: Card;
  quantity: number = 1;

  get price(): number {
    return this.card.price * this.quantity;
  }
}
