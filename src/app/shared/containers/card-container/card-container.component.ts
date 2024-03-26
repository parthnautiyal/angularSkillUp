import { Router } from '@angular/router';
import { Component, HostListener, Input, NgZone, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { Path } from 'src/app/models/Path';
import { Batch } from 'src/app/models/Batch';
import { Store } from '@ngrx/store';
import {
  selectAllCourses,
  selectAllCoursesError,
  selectAllCoursesLoading,
  selectEnrolledCourses,
  selectEnrolledCoursesError,
  selectEnrolledCoursesLoading,
} from 'src/app/state/selector/course.selector';
import {
  selectBatches,
  selectBatchesError,
  selectBatchesLoading,
  selectEnrolledBatches,
  selectEnrolledBatchesError,
  selectEnrolledBatchesLoading,
} from 'src/app/state/selector/batch.selector';
import { Title } from 'src/app/constants/enums/title';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import {
  selectAllPaths,
  selectAllPathsError,
  selectAllPathsLoading,
  selectEnrolledPaths,
  selectEnrolledPathsError,
  selectEnrolledPathsLoading,
} from 'src/app/state/selector/path.selector';
import {
  loadAllCourses,
  loadEnrolledCourses,
} from 'src/app/state/action/course.actions';
import {
  loadAllBatches,
  loadEnrolledBatches,
} from 'src/app/state/action/batch.actions';
import {
  loadAllPaths,
  loadEnrolledPaths,
} from 'src/app/state/action/path.actions';
import { Error } from 'src/app/models/Error';
import { MessageService } from 'primeng/api';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';
import { BatchDetails, EnrolledBatches } from 'src/app/models/EnrolledBatches';
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.sass'],
  providers: [MessageService],
})
export class CardContainerComponent implements OnInit {
  loading: Boolean = true;
  error: Boolean = false;
  errorEnrolled: Boolean = false;
  isActive = true;
  Title = Title;
  RouterLinks = RouterLinks;
  allPaths: Path[] = [];
  allCourses: Course[] = [];
  allBatches: Batch[] = [];
  enrolledBatches: EnrolledBatches = {
    averageProgress: 0,
    count: 0,
    enrolledBatches: [],
  };
  height: number = 0;
  @Input() title: string = '';
  @Input() prefixWord: string = '';
  errorBatch: Error = {
    message: '',
    code: 0,
  };
  errorCourse: Error = {
    message: '',
    code: 0,
  };
  errorPath: Error = {
    message: '',
    code: 0,
  };
  enrolled:boolean = false;
  constructor(
    private store: Store,
    private router: Router,
    private messageService: MessageService,
    private ngZone: NgZone
  ) {}
  ngOnInit(): void {
    // if (this.router.url == '/dashboard') {
    //   // if (this.title == Title.COURSES) {
    //   //   this.height = 262;
    //   //   this.store.dispatch(loadAllCourses());
    //   //   this.store.select(selectAllCourses).subscribe((res) => {
    //   //     if (typeof res === 'object' && Object.keys(res).length > 0) {
    //   //       this.allCourses = res;
    //   //       this.error = false;
    //   //     }
    //   //   });

    //   //   this.store.select(selectAllCoursesError).subscribe((res) => {
    //   //     if (res != null) {
    //   //       this.errorCourse.message = res.message.split('`').slice(1);
    //   //       this.errorCourse.code = res.message.split('`').slice(0, 1);
    //   //       this.error = true;
    //   //     }
    //   //   });
    //   //   this.store.select(selectAllCoursesLoading).subscribe((res) => {
    //   //     if (res == false) {
    //   //       setTimeout(() => {
    //   //         this.loading = res;
    //   //       }, 1000);
    //   //     } else {
    //   //       this.loading = res;
    //   //     }
    //   //   });
    //   // }
    //   if (this.title == Title.BATCHES) {
    //     this.height = 200;
    //     this.store.dispatch(loadAllBatches());
    //     this.store.select(selectBatches).subscribe((res) => {
    //       if (typeof res === 'object' && Object.keys(res).length > 0) {
    //         this.allBatches = res;
    //         this.error = false;
    //       }
    //     });
    //     this.store.select(selectBatchesError).subscribe((res) => {
    //       if (res != null) {
    //         this.errorBatch.message = res.message.split('`').slice(1);
    //         this.errorBatch.code = res.message.split('`').slice(0, 1);
    //         this.error = true;
    //       }
    //     });
    //     this.store.select(selectBatchesLoading).subscribe((res) => {
    //       if (res == false) {
    //         setTimeout(() => {
    //           this.loading = res;
    //         }, 500);
    //       } else {
    //         this.loading = res;
    //       }
    //     });
    //   }
    //   if (this.title == Title.PATHS) {
    //     this.height = 112;
    //     this.store.dispatch(loadAllPaths());
    //     this.store.select(selectAllPaths).subscribe((res) => {
    //       if (typeof res === 'object' && Object.keys(res).length > 0) {
    //         this.allPaths = res;
    //         this.error = false;
    //       }
    //     });
    //     this.store.select(selectAllPathsError).subscribe((res) => {
    //       if (res != null) {
    //         this.errorPath.message = res.message.split('`').slice(1);
    //         this.errorPath.code = res.message.split('`').slice(0, 1);
    //         this.error = true;
    //       }
    //     });
    //     this.store.select(selectAllPathsLoading).subscribe((res) => {
    //       if (res == false) {
    //         setTimeout(() => {
    //           this.loading = res;
    //         }, 500);
    //       } else {
    //         this.loading = res;
    //       }
    //     });
    //   }
    // }
    // if (this.router.url == '/user') {
    //   if (this.title == Title.BATCHES) {
    //     this.height = 120;
    //     this.store.dispatch(loadEnrolledBatches());
    //     this.store.select(selectEnrolledBatches).subscribe((data) => {
    //       console.log(data);
    //       this.enrolledBatches = data;
    //     });

    //     this.store.select(selectBatchesError).subscribe((res) => {
    //       if (res != null) {
    //         this.error = true;
    //       }
    //     });
    //     this.store.select(selectBatchesLoading).subscribe((res) => {
    //       if (res == false) {
    //         setTimeout(() => {
    //           this.loading = res;
    //         }, 500);
    //       } else {
    //         this.loading = res;
    //       }
    //     });
    //   }

    //   if (this.title == Title.COURSES) {
    //     this.height = 262;
    //     this.store.dispatch(loadEnrolledCourses());
    //     this.store.select(selectEnrolledCourses).subscribe((res) => {
    //       if (typeof res === 'object' && Object.keys(res).length > 0) {
    //         this.allCourses = res;
    //         this.errorEnrolled = false;
    //       }
    //     });
    //     this.store.select(selectEnrolledCoursesError).subscribe((res) => {
    //       if (res != null) {
    //         this.errorCourse.message = res.message.split('`').slice(1);
    //         this.errorCourse.code = res.message.split('`').slice(0, 1);
    //         this.errorEnrolled = true;
    //       }
    //     });
    //     this.store.select(selectEnrolledCoursesLoading).subscribe((res) => {
    //       if (res == false) {
    //         setTimeout(() => {
    //           this.loading = res;
    //         }, 500);
    //       } else {
    //         this.loading = res;
    //       }
    //     });
    //   }
    //   if (this.title == Title.PATHS) {
    //     this.height = 112;
    //     this.store.dispatch(loadEnrolledPaths());
    //     this.store.select(selectEnrolledPaths).subscribe((res) => {
    //       if (typeof res === 'object' && Object.keys(res).length > 0) {
    //         this.allPaths = res;
    //         this.errorEnrolled = false;
    //       }
    //     });
    //     this.store.select(selectEnrolledPathsError).subscribe((res) => {
    //       if (res != null) {
    //         this.errorPath.message = res.message.split('`').slice(1);
    //         this.errorPath.code = res.message.split('`').slice(0, 1);
    //         this.errorEnrolled = true;
    //       }
    //     });
    //     this.store.select(selectEnrolledPathsLoading).subscribe((res) => {
    //       if (res == false) {
    //         setTimeout(() => {
    //           this.loading = res;
    //         }, 500);
    //       } else {
    //         this.loading = res;
    //       }
    //     });
    //   }
    // }

    if (this.title == Title.COURSES) {
      this.height = 262;
      // this.store.dispatch(loadAllCourses());
      this.store.select(selectAllCourses).subscribe((res) => {
        if (typeof res === 'object' && Object.keys(res).length > 0) {
          this.allCourses = res;
        }
      });
      this.store.select(selectAllCoursesError).subscribe((res) => {
        if (res != null) {
          this.errorCourse.message = res.message.split('`').slice(1);
          this.errorCourse.code = res.message.split('`').slice(0, 1);
          this.error = true;
        }else{
          this.error=false;
        }
      });
      this.store.select(selectAllCoursesLoading).subscribe((res) => {
        if (res == false) {
          setTimeout(() => {
            this.loading = res;
          }, 1000);
        } else {
          this.loading = res;
        }
      });
        // this.store.dispatch(loadEnrolledCourses());
        this.store.select(selectEnrolledCourses).subscribe((res) => {
          if (typeof res === 'object' && Object.keys(res).length > 0) {
            this.allCourses = res;
          }
        });
        this.store.select(selectEnrolledCoursesError).subscribe((res) => {
          if (res != null) {
            this.errorCourse.message = res.message.split('`').slice(1);
            this.errorCourse.code = res.message.split('`').slice(0, 1);
            this.error = true;
          }else{
            this.error=false;
          }
        });
        this.store.select(selectEnrolledCoursesLoading).subscribe((res) => {
          if (res == false) {
            setTimeout(() => {
              this.loading = res;
            }, 500);
          } else {
            this.loading = res;
          }
        });
    }
    if (this.title == Title.BATCHES && !(this.router.url == "/user")) {
      this.height = 200;
      this.enrolled = false;
      // this.store.dispatch(loadAllBatches());
      this.store.select(selectBatches).subscribe((res) => {
        if (typeof res === 'object' && Object.keys(res).length > 0) {
          this.allBatches = res;
        }
      });
      this.store.select(selectBatchesError).subscribe((res) => {
        if (res != null) {
          this.errorBatch.message = res.message.split('`').slice(1);
          this.errorBatch.code = res.message.split('`').slice(0, 1);
          this.error = true;
        }
      });
      this.store.select(selectBatchesLoading).subscribe((res) => {
        if (res == false) {
          setTimeout(() => {
            this.loading = res;
          }, 500);
        } else {
          this.loading = res;
        }
      });
    }
    if (this.title == Title.BATCHES && this.router.url == "/user") {
      this.height = 120;
      this.enrolled = true;
      // this.store.dispatch(loadEnrolledBatches());
      this.store.select(selectEnrolledBatches).subscribe((data) => {
        console.log(data);
        this.enrolledBatches = data;
      });

      this.store.select(selectEnrolledBatchesError).subscribe((res) => {
        if (res != null) {
          this.error = true;
        }else{
          this.errorBatch.message = res.message.split('`').slice(1);
          this.errorBatch.code = res.message.split('`').slice(0, 1);
          this.error=false;
        }
      });
      this.store.select(selectEnrolledBatchesLoading).subscribe((res) => {
        if (res == false) {
          setTimeout(() => {
            this.loading = res;
          }, 500);
        } else {
          this.loading = res;
        }
      });
    }
    if (this.title == Title.PATHS) {
      this.height = 112;
      // this.store.dispatch(loadAllPaths());
      this.store.select(selectAllPaths).subscribe((res) => {
        if (typeof res === 'object' && Object.keys(res).length > 0) {
          this.allPaths = res;
        }
      });
      this.store.select(selectAllPathsError).subscribe((res) => {
        if (res != null) {
          this.errorPath.message = res.message.split('`').slice(1);
          this.errorPath.code = res.message.split('`').slice(0, 1);
          this.error = true;
        }else{
          this.error=false;
        }
      });
      this.store.select(selectAllPathsLoading).subscribe((res) => {
        if (res == false) {
          setTimeout(() => {
            this.loading = res;
          }, 500);
        } else {
          this.loading = res;
        }
      });
      this.store.select(selectEnrolledPaths).subscribe((res) => {
        if (typeof res === 'object' && Object.keys(res).length > 0) {
          this.allPaths = res;
        }
      });
      this.store.select(selectEnrolledPathsError).subscribe((res) => {
        if (res != null) {
          this.errorPath.message = res.message.split('`').slice(1);
          this.errorPath.code = res.message.split('`').slice(0, 1);
          this.error = true;
        }else{
          this.error=false;
        }
      });
      this.store.select(selectEnrolledPathsLoading).subscribe((res) => {
        if (res == false) {
          setTimeout(() => {
            this.loading = res;
          }, 500);
        } else {
          this.loading = res;
        }
      });
    }
    this.onResize();
  }
  shimmerCount = 3;

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.ngZone.run(() => {
      if (window.innerWidth < 768) {
        // adjust the value as per your requirement
        this.shimmerCount = 1; // adjust the value as per your requirement
      } else {
        this.shimmerCount = 3; // adjust the value as per your requirement
      }
    });
  }
}
