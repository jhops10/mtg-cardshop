import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor() {}

  getAll(): string[] {
    return [
      'assets/images/artifact-1.png',
      'assets/images/artifact-2.png',
      'assets/images/black-1.png',
      'assets/images/black-2.png',
      'assets/images/blue-1.png',
      'assets/images/blue-2.png',
      'assets/images/green-1.png',
      'assets/images/green-2.png',
      'assets/images/red-1.png',
      'assets/images/red-2.png',
      'assets/images/white-1.png',
      'assets/images/white-2.png',
    ];
  }
}
