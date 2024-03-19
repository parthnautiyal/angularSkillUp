import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
  constructor(private http: HttpClient) {}

  private url = 'https://api.training.zopsmart.com/students';

  getAllCourses() {
    return this.http.get(this.url + '/courses?pageSize=12&pageNo=1');
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

  getEnrolledCourses() {
    return this.http.get(
      'https://api.training.zopsmart.com/students/enrolled-courses'
    );
  }
}
