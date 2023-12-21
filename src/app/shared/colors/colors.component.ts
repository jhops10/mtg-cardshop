import { Component, OnInit } from '@angular/core';
import { Color } from '../models/Color';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent implements OnInit {
  colors: Color[] = [];

  constructor(private cardService: CardsService) {}

  ngOnInit(): void {
    this.colors = this.cardService.getAllColors();
  }
}
