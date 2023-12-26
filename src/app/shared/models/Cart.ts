import { CartItem } from './CartItem';

export class Cart {
  find(arg0: (item: any) => boolean) {
    throw new Error('Method not implemented.');
  }
  items: CartItem[] = [];

  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price;
    });

    return totalPrice;
  }
}
