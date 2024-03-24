import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Rating } from 'src/app/models/Rating';

@Component({
  selector: 'app-course-reviews',
  templateUrl: './course-reviews.component.html',
  styleUrls: ['./course-reviews.component.sass'],
})
export class CourseReviewsComponent implements OnInit {
  ratingClicked: number = 3;
  isReviewOn: boolean = true;
  isReviewCommentOn: boolean = false;
  rating: Rating = {
    fiveStars: 1,
    fourStars: 2,
    threeStars: 0,
    twoStars: 0,
    oneStars: 0,
  };
  ratingPercentage: number[] = [];
  avgRatingArray: boolean[] = [];
  avgRating: number = 2.5;

  totalRating: number = 0;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.totalRating = Object.values(this.rating).reduce((a, b) => a + b, 0);
    console.log('Rating Total -> ' + this.totalRating);
    this.updateRating(this.rating);
    this.createAvgRatingArray();

    this.matIconRegistry.addSvgIcon(
      'star',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/star.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'review-star',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '/assets/review-star.svg'
      )
    );
  }

  handleReviewButton() {
    this.isReviewOn = !this.isReviewOn;
    this.isReviewCommentOn = false;
  }
  handleReviewCommentButton() {
    this.isReviewOn = false;
    this.isReviewCommentOn = !this.isReviewCommentOn;
  }
  handleMyReviewButton() {
    this.isReviewCommentOn = false;
  }

  updateRating(rating: Rating) {
    rating.fiveStars = (rating.fiveStars / this.totalRating) * 100;
    rating.fourStars = (rating.fourStars / this.totalRating) * 100;
    rating.threeStars = (rating.threeStars / this.totalRating) * 100;
    rating.twoStars = (rating.twoStars / this.totalRating) * 100;
    rating.oneStars = (rating.oneStars / this.totalRating) * 100;
    this.ratingPercentage[0] = Math.floor(rating.fiveStars);
    this.ratingPercentage[1] = Math.floor(rating.fourStars);
    this.ratingPercentage[2] = Math.floor(rating.threeStars);
    this.ratingPercentage[3] = Math.floor(rating.twoStars);
    this.ratingPercentage[4] = Math.floor(rating.oneStars);
    console.log(this.ratingPercentage);
  }
  createAvgRatingArray() {
    for (let i = 0; i < Math.floor(this.avgRating); i++) {
      this.avgRatingArray.push(true);
    }
    if (this.avgRating % 1 != 0) {
      this.avgRatingArray.push(false);
    }

    console.log('Avg rating array _> ' + this.avgRatingArray);
  }

  ngOnInit(): void {}
}
