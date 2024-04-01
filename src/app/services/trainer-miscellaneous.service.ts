import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../constants/enums/API';
import { APIResponse } from '../models/ApiResponse';
import { Course } from '../models/Course';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';
import { CreatePath } from '../models/CreatePath';
import { CreateChapter, CreateCourse, Resource } from '../models/CreateCourse';
import { Chapter } from '../models/Chapter';

@Injectable({
  providedIn: 'root',
})
export class TrainerMiscellaneousService {
  constructor(private http: HttpClient) {}

  private courseSubject = new BehaviorSubject<Course[]>([
    {
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
      collaborators: [],
    },
  ]);
  courses$ = this.courseSubject.asObservable();
  getCourses(id: number) {
    return this.http
      .get<APIResponse<Course[]>>(
        API.BASE_URL +
          API.ADMIN +
          API.COURSES +
          '?projection=&pageSize=12&pageNo=' +
          id
      )
      .subscribe((data) => {
        if (data != null && data != undefined) {
          this.courseSubject.next(data.data);
        }
      });
  }

  private collaboratorSubject = new BehaviorSubject<User[]>([
    {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
  ]);
  collaborators$ = this.collaboratorSubject.asObservable();

  getAllCollaborators(index: number) {
    return this.http
      .get<APIResponse<User[]>>(
        API.BASE_URL + API.USERS + '?pageSize=10&pageNo=' + index
      )
      .subscribe((data) => {
        if (data != null && data != undefined) {
          this.collaboratorSubject.next(data.data);
        }
      });
  }

  private developerToken = '7b172834-1703-4169-b16a-18e9bfabd587';

  uploadImage(imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('imageUpload', imageFile, imageFile.name);

    const headers = new HttpHeaders({
      'developer-token': this.developerToken,
    });

    return this.http.post(API.MEDIA + API.IMAGE_UPLOAD, formData, { headers });
  }

  createPathTrainer(data: CreatePath) {
    return this.http.post(API.BASE_URL + API.ADMIN + API.PATHS, data);
  }

  createCourse(data: CreateCourse) {
    return this.http.post(API.BASE_URL + API.ADMIN + API.COURSES, data);
  }

  getCoursesBehaviourSubject = new BehaviorSubject<Chapter[]>([]);
  getCourseChapters$ = this.getCoursesBehaviourSubject.asObservable();

  getCourseChapters(courseId: number) {
    return this.http
      .get<APIResponse<Chapter[]>>(
        API.BASE_URL + API.ADMIN + API.COURSES + '/' + courseId + API.CHAPTERS
      )
      .subscribe((data) => {
        if (data != null && data != undefined) {
          this.getCoursesBehaviourSubject.next(data.data);
        }
      });
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('fileUpload', file, file.name);

    const headers = new HttpHeaders({
      'developer-token': this.developerToken,
    });

    return this.http.post(API.MEDIA + API.FILE_UPLOAD, formData, { headers });
  }

  createChapter(courseId: number, data: CreateChapter) {
    return this.http.post(
      API.BASE_URL + API.ADMIN + API.COURSES + '/' + courseId + API.CHAPTERS,
      data
    );
  }

  getCourseResourcesBehaviourSubject = new BehaviorSubject<Resource[]>([]);
  getCourseResources$ = this.getCourseResourcesBehaviourSubject.asObservable();

  getCourseResources(courseId: number) {
    return this.http
      .get<APIResponse<Resource[]>>(
        API.BASE_URL + API.ADMIN + API.COURSES + '/' + courseId + API.RESOURCES
      )
      .subscribe((data) => {
        if (data != null && data != undefined) {
          this.getCourseResourcesBehaviourSubject.next(data.data);
        }
      });
  }

  patchCourse(courseId: number, data: any) {
    return this.http.patch(
      API.BASE_URL + API.ADMIN + API.COURSES + '/' + courseId,
      data
    );
  }

  reorderChapters(courseId: number, chapterIds: number[]) {
    return this.http.patch(
      API.BASE_URL +
        API.ADMIN +
        API.COURSES +
        '/' +
        courseId +
        API.CHAPTERS +
        API.REORDER,
      { chapterIds }
    );
  }
}

fetch(
  'https://staging.api.training.zopsmart.com/admin/courses/305/chapters/reorder',
  {
    headers: {
      accept: 'application/json',
      'accept-language': 'en-US,en;q=0.9',
      authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoidHJhaW5lciIsImV4cCI6MTcxMTk4MjUxNiwiaWF0IjoxNzExOTgyMjE2LCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsidHJhaW5lciIsInN0dWRlbnQiXSwic3ViIjoiY2hhbmRhbi5zYWhhQHpvcHNtYXJ0LmNvbSIsInVzZXJJZCI6MzI2fQ.QSSd5u54nLzbIww1rs6-rJLC2X6y8QzIjfvky2DcJUqY8RVPYNtKWL7K2JkYQ4rBLC5084CnXrDf6x9fyfwF2g8KrVkmgpNSI_b015NMhajl7BJMprGjxH30Snlsnxr6Z88BmTA8LM1hkhP_kNPY9l2LLOqcobOXIqq-xW77E-HkDH1MhsJN4QPl2bCToEOZnKoWbvFfvXpwUGl4x-DFtzlPpy62v6wyLct8KN8KEWsnwC6DTtzp7HMQFaN29Wcc_r6WYo9cCLrgXxYGPP5Yv0wOWUd-bn5lhg4Z29LHq-hFRtzhL8zU6Yx4pRdO4KAmD8VuwFWOp7RMQUUY830vAQ',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      pragma: 'no-cache',
      refreshtoken:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMjA2NTA3OCwiaWF0IjoxNzExOTc4Njc4LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIn0.armnIIRfBfzC9GNM4aAa-GhsDJ2r-9IMNcdjdRfFTotaBc7fA3SRK85FPjKVaqWxHYUskhGH5sVivyHpCMy22KTtG63Y_Tbfhx7De_Xyp_2VUvvlykcThX2HMOPYYSPu_Bto7rHSkkrhIRIp7ehoG0QjVRyuHzqPeFJDbe8vO2okWIuw5ivet8bOsfdjIIH4mDvAAfimzf22ollRTFqvFiOcjxhOCZtrqyEbzDw045QBcYghXEMGZRzNRR4yYweBYqe84x-NaYggOBy-DZgWx_ZUFaahiv_iMPJnAUUrZiXIlBXPmdMW3Z8sItW-nLRWZhwzpjuITvGFQ9bDOlYr2Q',
      'sec-ch-ua':
        '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    },
    referrer: 'https://staging.training.zopsmart.com/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: '{"chapterIds":[401,400]}',
    method: 'PATCH',
    mode: 'cors',
    credentials: 'include',
  }
);
