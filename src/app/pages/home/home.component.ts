import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';
import { Card } from 'src/app/shared/models/Card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.cards = this.cardsService.getAllCardsBySearchTerm(
          params['searchTerm']
        );
      } else if (params['color']) {
        this.cards = this.cardsService.getAllCardsByColor(params['color']);
      } else {
        this.cards = this.cardsService.getAll();
      }
    });
  }

  toggleFavorite(card: Card) {
    card.favorite = !card.favorite;
  }
}
