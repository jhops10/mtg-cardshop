import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Card } from 'src/app/shared/models/Card';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css'],
})
export class CardPageComponent implements OnInit {
  card!: Card;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CardsService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.card = cardService.getCardById(params['id']);
      }
    });
  }

  ngOnInit(): void {}

  homePage() {
    this.router.navigate(['/']);
  }
}
