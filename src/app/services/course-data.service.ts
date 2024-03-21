import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
  constructor(private http: HttpClient) {}

  private url = 'https://api.training.zopsmart.com/students';

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url + '/courses?pageSize=12&pageNo=1');
  }
  private cache: any;
  private allCoursesSubject = new BehaviorSubject<any>({});
  allCourses$ = this.allCoursesSubject.asObservable();
  getCoursesData() {
    if (this.cache) {
      this.allCoursesSubject.next(this.cache);
    } else {
      this.http
        .get(this.url + '/courses?pageSize=12&pageNo=1')
        .subscribe((data) => {
          this.cache = data;
          this.allCoursesSubject.next(this.cache);
        });
    }
  }

  getNoOfEnrolledCourses() {
    return this.http.get(this.url + '/no-of-enrolled-courses');
  }
  getCourseAboutInfo(id: string) {
    return this.http.get(this.url + '/courses/' + id);
  }
  getChapterData(id: string) {
    return this.http.get(this.url + '/courses/' + id + '/chapters');
  }

  getEnrolledCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(
      'https://api.training.zopsmart.com/students/enrolled-courses'
    );
  }
}
