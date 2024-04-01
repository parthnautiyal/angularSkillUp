import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import { Course } from 'src/app/models/Course';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';
import { ThemeService } from 'src/app/services/theme.service';
import { loadFavoriteCourses } from 'src/app/state/action/course.actions';

@Component({
  selector: 'app-profile-course-card-trainer',
  templateUrl: './profile-course-card-trainer.component.html',
  styleUrls: ['./profile-course-card-trainer.component.sass'],
})
export class ProfileCourseCardTrainerComponent implements OnInit {
  currentId: number = 0;
  @Input() onGoingFlag: boolean = false;
  isDashBoard: boolean = false;
  RouterLinks = RouterLinks;
  isProfile: boolean = false;
  isDarkMode: boolean = false;
  @Input() isRed: boolean = true;
  @Input() singleCourse: Course = {
    id: 0,
    courseId: 0,
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

  constructor(
    private themeService: ThemeService,
    private misc: MiscellaneousService,
    private store: Store,
    private messageService: MessageService,
    private router: Router
  ) {
    this.themeService.isDarkMode().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnInit(): void {
    this.isProfile = this.router.url.includes('user') ? true : false;
    if (this.router.url == '/dashboard') {
      // console.log('dashboard');
      this.isDashBoard = true;
    }
  }

}
