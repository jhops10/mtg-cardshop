import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Card } from 'src/app/shared/models/Card';
import { CartService } from 'src/app/services/cart.service';

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
    private router: Router,
    private cartService: CartService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.card = cardService.getCardById(params['id']);
      }
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.card);
    this.router.navigateByUrl('/cart-page');
  }

  homePage() {
    this.router.navigate(['/']);
  }
}
