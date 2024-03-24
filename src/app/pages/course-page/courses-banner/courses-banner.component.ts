import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCourseAboutInfo } from 'src/app/state/action/course.action';
import { selectCourseAboutInfo } from 'src/app/state/selector/course.selector';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-courses-banner',
  templateUrl: './courses-banner.component.html',
  styleUrls: ['./courses-banner.component.sass'],
})
export class CoursesBannerComponent implements OnInit {
  id: string = '';

  CourseDetails: Course = {
    id: 0,
    name: '',
    courseName: '',
    imageUrl: '',
    isAccessible: false,
    description: '',
    about: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
    createdAt: '',
    isFavourite: false,
    progress: 0,
    enrolledAt: '',
    completedAt: '',
    noOfChapters: 0,
    updatedAt: '',
    level: 0,
  };
  constructor(private store: Store, private router: ActivatedRoute) {
    this.id = router.snapshot.params['id'];
  }

  ngOnInit(): void {
    // this.store.dispatch(loadCourseAboutInfo({ courseId: this.id }));
    this.store.select(selectCourseAboutInfo).subscribe((courseData) => {
      this.CourseDetails = courseData;
    });
  }
  isButtonRed: boolean = false;

  toggleColor() {
    this.isButtonRed = !this.isButtonRed;
  }
}
