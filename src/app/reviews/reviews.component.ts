import { Component } from '@angular/core';
import { ReviewsList } from './reviews-data/mock-reviews';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews = ReviewsList;
}
