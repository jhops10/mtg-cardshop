import { Injectable } from '@angular/core';
import { Card } from '../shared/models/Card';
import { Color } from '../shared/models/Color';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor() {}

  getAllCardsBySearchTerm(searchTerm: string): Card[] {
    return this.getAll().filter((card) => {
      card.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
  }

  getAllColors(): Color[] {
    return [
      { name: 'All', count: 12 },
      { name: 'Artifact', count: 2 },
      { name: 'Black', count: 2 },
      { name: 'Blue', count: 2 },
      { name: 'Green', count: 2 },
      { name: 'Red', count: 2 },
      { name: 'White', count: 2 },
    ];
  }

  getAllCardsByColor(color: string): Card[] {
    if (color == 'All') {
      return this.getAll();
    } else {
      return this.getAll().filter((card) => card.color?.includes(color));
    }
  }

  getAll(): Card[] {
    return [
      {
        id: 1,
        name: 'Relic of Progenitus',
        color: 'Artifact',
        price: 37,
        tags: [' Modern', 'Pauper', 'Oathbreaker', 'Legacy'],
        favorite: false,
        imageUrl: 'assets/images/artifact-1.png',
      },
      {
        id: 2,
        name: 'Spire Golem',
        color: 'Artifact',
        price: 1.55,
        tags: [' Modern', 'Pauper', 'Oathbreaker', 'Legacy'],
        favorite: false,
        imageUrl: 'assets/images/artifact-2.png',
      },
      {
        id: 3,
        name: 'Troll of Khazad-dûm',
        color: 'Black',
        price: 9.5,
        tags: [' Modern', 'Pauper', 'Legacy'],
        favorite: false,
        imageUrl: 'assets/images/black-1.png',
      },
      {
        id: 4,
        name: 'Shrivel',
        color: 'Black',
        price: 9.5,
        tags: [' Modern', 'Pauper'],
        favorite: false,
        imageUrl: 'assets/images/black-2.png',
      },
      {
        id: 5,
        name: 'Dispel',
        color: 'Blue',
        price: 0.35,
        tags: [' Modern', 'Pauper'],
        favorite: false,
        imageUrl: 'assets/images/blue-1.png',
      },
      {
        id: 6,
        name: 'Moon-Circuit Hacker',
        color: 'Blue',
        price: 1.62,
        tags: [' Modern', 'Pauper', 'Oathbreaker', 'Legacy'],
        favorite: false,
        imageUrl: 'assets/images/blue-2.png',
      },
      {
        id: 7,
        name: 'Avenging Hunter',
        color: 'Green',
        price: 11.88,
        tags: [' Modern', 'Pauper', 'Oathbreaker', 'Legacy'],
        favorite: false,
        imageUrl: 'assets/images/green-1.png',
      },
      {
        id: 8,
        name: 'Skarrgan Pit-Skulk',
        color: 'Green',
        price: 0.36,
        tags: [' Modern', 'Pauper', 'Oathbreaker'],
        favorite: false,
        imageUrl: 'assets/images/green-2.png',
      },
      {
        id: 9,
        name: 'Kuldotha Rebirth',
        color: 'Red',
        price: 12,
        tags: [' Modern', 'Pauper', 'Oathbreaker', 'Legacy'],
        favorite: false,
        imageUrl: 'assets/images/red-1.png',
      },
      {
        id: 10,
        name: 'Kiln Fiend',
        color: 'Red',
        price: 0.45,
        tags: [' Modern', 'Pauper', 'Legacy'],
        favorite: true,
        imageUrl: 'assets/images/red-2.png',
      },
      {
        id: 11,
        name: 'Guardian of the Guildpact',
        color: 'White',
        price: 7.9,
        tags: [' Modern', 'Pauper', 'Legacy'],
        favorite: true,
        imageUrl: 'assets/images/white-1.png',
      },
      {
        id: 12,
        name: 'Journey to Nowhere',
        color: 'White',
        price: 7.13,
        tags: [' Modern', 'Pauper', 'Legacy'],
        favorite: false,
        imageUrl: 'assets/images/white-2.png',
      },
    ];
  }
}

// 'assets/images/artifact-1.png',
// 'assets/images/artifact-2.png',
// 'assets/images/black-1.png',
// 'assets/images/black-2.png',
// 'assets/images/blue-1.png',
// 'assets/images/blue-2.png',
// 'assets/images/green-1.png',
// 'assets/images/green-2.png',
// 'assets/images/red-1.png',
// 'assets/images/red-2.png',
// 'assets/images/white-1.png',
// 'assets/images/white-2.png',
