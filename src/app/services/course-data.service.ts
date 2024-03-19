import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
import { BehaviorSubject } from 'rxjs';
=======
import { Observable } from 'rxjs';
import { Course, CourseList } from '../models/Course';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
  constructor(private http: HttpClient) {}

  private url = 'https://api.training.zopsmart.com/students';

<<<<<<< Updated upstream
  getAllCourses() {
    return this.http.get(this.url + '/courses?pageSize=12&pageNo=1');
=======
  getCourseData() : Observable<CourseList> {
    return this.http.get<CourseList>(this.url + '/courses?pageSize=12&pageNo=1');
>>>>>>> Stashed changes
  }
  private cache:any;
  private allCoursesSubject = new BehaviorSubject<any>({});
  allCourses$ = this.allCoursesSubject.asObservable();
  getCoursesData() {
    if (this.cache){
      this.allCoursesSubject.next(this.cache);
    }else{
      this.http.get(this.url + '/courses?pageSize=12&pageNo=1').subscribe((data)=>{
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

<<<<<<< Updated upstream
  getEnrolledCourses() {
    return this.http.get(
=======
  getOngoingCoursesV2() : Observable<CourseList> {
    return this.http.get<CourseList>(
>>>>>>> Stashed changes
      'https://api.training.zopsmart.com/students/enrolled-courses'
    );
  }
}
