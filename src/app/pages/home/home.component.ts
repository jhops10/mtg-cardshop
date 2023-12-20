import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cards: string[] = [];

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.cards = this.cardsService.getAll();
  }
}
