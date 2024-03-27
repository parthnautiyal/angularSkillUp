import { Ratings } from './../../../models/Ratings';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/models/Reviews';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';

@Component({
  selector: 'app-course-reviews',
  templateUrl: './course-reviews.component.html',
  styleUrls: ['./course-reviews.component.sass'],
})
export class CourseReviewsComponent implements OnInit {
  @Input() id = 0;
  ratingClicked: number = 0;
  isReviewOn: boolean = false;
  isMyReviewOn: boolean = true;
  isAllReviewOn: boolean = true;
  isReviewCommentOn: boolean = false;
  feedback: string = '';
  rating: Ratings = {
    averageRating: 0,
    rating: {
      fiveStars: 0,
      fourStars: 0,
      threeStars: 0,
      twoStars: 0,
      oneStars: 0,
    },
  };
  myReview: Review = {
    reviewId: 0,
    postedBy: {
      email: '',
      id: 0,
      imageUrl: '',
      name: '',
    },
    postedAt: '',
    updatedAt: '',
    deletedBy: '',
    deletedAt: '',
    rating: 0,
    feedback: '',
  };
  courseReview: Review[] = [];
  ratingPercentage: number[] = [];
  avgRatingArray: boolean[] = [];

  totalRating: number = 0;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private misc: MiscellaneousService,
    private router: ActivatedRoute
  ) {
    this.id = this.router.snapshot.params['id'];
    // this.misc.getRating(this.id).subscribe((rating) => {
    //   this.rating = rating.data;
    //   console.log('Rating -> ' + this.rating);
    // });

    //this.createAvgRatingArray();

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

  handleReviewStarClick(rating: number) {
    this.ratingClicked = rating;
  }

  handleReviewButton() {
    this.isReviewOn = true;
    this.isAllReviewOn = false;
  }

  handleCancelReviewButton() {
    this.isReviewOn = false;
    this.isAllReviewOn = true;
  }
  handleReviewCommentButton() {
    this.isReviewOn = false;
    this.isMyReviewOn = false;
    this.isReviewCommentOn = !this.isReviewCommentOn;
  }
  handleMyReviewButton() {
    this.isMyReviewOn = true;
    this.isReviewCommentOn = false;
  }

  handleReviewSubmit() {
    console.log(
      'Rating -> ' + this.ratingClicked,
      'Feedback -> ' + this.feedback
    );
  }

  updateRating(rating: Ratings) {
    this.totalRating = Object.values(this.rating.rating).reduce(
      (a, b) => a + b,
      0
    );
    console.log('Total Rating -> ' + this.totalRating);
    this.totalRating = this.totalRating == 0 ? 1 : this.totalRating;

    rating.rating.fiveStars =
      (rating.rating.fiveStars / this.totalRating) * 100;
    console.log(rating.rating);

    rating.rating.fourStars =
      (rating.rating.fourStars / this.totalRating) * 100;
    rating.rating.threeStars =
      (rating.rating.threeStars / this.totalRating) * 100;
    rating.rating.twoStars = (rating.rating.twoStars / this.totalRating) * 100;
    rating.rating.oneStars = (rating.rating.oneStars / this.totalRating) * 100;
    this.ratingPercentage[0] = Math.floor(rating.rating.fiveStars);
    this.ratingPercentage[1] = Math.floor(rating.rating.fourStars);
    this.ratingPercentage[2] = Math.floor(rating.rating.threeStars);
    this.ratingPercentage[3] = Math.floor(rating.rating.twoStars);
    this.ratingPercentage[4] = Math.floor(rating.rating.oneStars);
    console.log(this.ratingPercentage);
  }
  createAvgRatingArray() {
    for (let i = 0; i < Math.floor(this.rating.averageRating); i++) {
      this.avgRatingArray.push(true);
    }
    if (this.rating.averageRating % 1 != 0) {
      this.avgRatingArray.push(false);
    }
  }

  ngOnInit(): void {
    console.log('Rating Total -> ' + this.totalRating);

    this.misc.courseRating$.subscribe((res) => {
      console.log(res);
      if (res.averageRating != 0) this.rating = res;
    });
    this.misc.myCourseReviews$.subscribe((res) => {
      if (res != null) {
        this.myReview = res;
      }
      console.log(this.myReview);
    });

    this.updateRating(this.rating);
    this.createAvgRatingArray();
    this.misc.courseReviews$.subscribe((res) => {
      console.log(res);
      this.courseReview = res;
    });
  }

  updateReview() {}
}
