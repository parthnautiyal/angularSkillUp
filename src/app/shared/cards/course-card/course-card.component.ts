import { Component, OnInit, Input } from '@angular/core';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import { Course } from 'src/app/models/Course';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.sass'],
})
export class CourseCardComponent implements OnInit {
  RouterLinks = RouterLinks;
  isProfile: boolean =
    localStorage.getItem('profile') === 'true' ? true : false;
  isDarkMode: boolean = false;

  @Input() singleCourse: Course = {
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

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkMode().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnInit(): void {}

  toggleColor() {}
}
