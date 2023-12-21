export class Card {
  id!: number;
  name!: string;
  color!: string;
  price!: number;
  tags?: string[];
  favorite: boolean = false;
  imageUrl!: string;
}
