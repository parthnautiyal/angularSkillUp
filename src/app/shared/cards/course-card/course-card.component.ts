import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import { Course } from 'src/app/models/Course';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';
import { ThemeService } from 'src/app/services/theme.service';
import { loadFavoriteCourses } from 'src/app/state/action/course.actions';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.sass'],
  providers: [MessageService],
})
export class CourseCardComponent implements OnInit {
  @Input() onGoingFlag: boolean = false;
  RouterLinks = RouterLinks;
  isProfile: boolean =
    localStorage.getItem('profile') === 'true' ? true : false;
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
    private messageService: MessageService
  ) {
    this.themeService.isDarkMode().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnInit(): void {}

  toggleColor() {
    this.isRed = !this.isRed;
    if (this.isRed) {
      this.misc.postFavourite(this.singleCourse.id).subscribe((res: any) => {
        this.showSuccess();
      });
    } else if (!this.isRed) {
      this.misc.deleteFavourite(this.singleCourse.id).subscribe((res: any) => {
        this.store.dispatch(loadFavoriteCourses());

        this.showInfo();
      });
    }
  }

  showInfo() {
    this.messageService.add({
      severity: 'info',
      summary: 'Removed',
      detail: 'Removed from Favorites -> ' + this.singleCourse.id,
    });
  }
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Favorite Added -> ' + this.singleCourse.id,
    });
  }
}
