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
  getCourseAboutInfo(id: string) {
    return this.http.get(this.url + '/courses/' + id);
  }
}
