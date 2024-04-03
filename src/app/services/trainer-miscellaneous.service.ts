import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../constants/enums/API';
import { APIResponse } from '../models/ApiResponse';
import { Course } from '../models/Course';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';
import {
  CreatePath,
  PathCreateRequest,
  PathResponseData,
} from '../models/CreatePath';
import {
  CreateChapter,
  CreateCourse,
  CreateCourseResponse,
  Resource,
} from '../models/CreateCourse';
import { Chapter } from '../models/Chapter';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class TrainerMiscellaneousService {
  //ptoast success message

  success(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 5000,
    });
  }

  failure(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 5000,
    });
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

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

  createPathTrainer(data: PathCreateRequest) {
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

  searchCollaborator(name: string) {
    return this.http.get<APIResponse<User[]>>(
      API.BASE_URL +
        API.SEARCH +
        API.USERS +
        '?name=' +
        name +
        '&pageSize=10&pageNo=1'
    );
  }

  getTrainerPathBehaviourSubject = new BehaviorSubject<PathResponseData>({
    pathId: 0,
    pathName: '',
    imageUrl: '',
    isAccessible: false,
    isOwner: false,
    description: '',
    about: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
    createdAt: '',
    updatedAt: '',
    collaborators: [],
    courses: [],
    courseIds: [],
  });
  getTrainerPath$ = this.getTrainerPathBehaviourSubject.asObservable();

  getTrainerPath(id: number) {
    return this.http
      .get<APIResponse<PathResponseData>>(
        API.BASE_URL + API.ADMIN + API.PATHS + '/' + id + '?projection=course'
      )
      .subscribe((data) => {
        if (data != null && data != undefined) {
          this.getTrainerPathBehaviourSubject.next(data.data);
        }
      });
  }

  patchTrainerpath(id: number, data: CreatePath) {
    console.log(id);

    return this.http.patch(
      API.BASE_URL + API.ADMIN + API.PATHS + '/' + id,
      data
    );
  }

  getTrainerCourseBehaviourSubject = new BehaviorSubject<CreateCourseResponse>({
    courseId: 0,
    courseName: '',
    imageUrl: '',
    isAccessible: false,
    isOwner: false,
    description: '',
    about: '',
    level: '',
    prerequisites: [],
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
    createdAt: '',
    updatedAt: '',
    collaborators: [],
  });

  getTrainerCourse$ = this.getTrainerCourseBehaviourSubject.asObservable();

  getTrainerCourseById(id: number) {
    return this.http
      .get<APIResponse<CreateCourseResponse>>(
        API.BASE_URL + API.ADMIN + API.COURSES + '/' + id
      )
      .subscribe((data) => {
        if (data != null && data != undefined) {
          this.getTrainerCourseBehaviourSubject.next(data.data);
        }
      });
  }

  patchTrainerCourse(id: number, data: CreateCourse) {
    return this.http.patch(
      API.BASE_URL + API.ADMIN + API.COURSES + '/' + id,
      data
    );
  }
}
