import { Injectable } from '@angular/core';
import { Paths } from '../models/Paths';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PathDataService {
  user: any = {
    token:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMDgyNTQwOCwiaWF0IjoxNzEwODI1MTA4LCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIiwidXNlcklkIjozMzJ9.NlAnvnZjYx_7JFUMsc_DWmYdgSTmA2PAn9mHhfFfT01KJ_UL6WcARLBj73qPrGD_xLeD5PV19KoGaLrz7902K8i04_4PzSygfJ2_-a_uyS81fN6Q0xB1h3X3P5kIbPA9zF4oMx79UDhZUILTYm1Djz1ToIAJqOfmvNUCjecjcmWEvLo9gorPOeJXQmM0-MBOwj1ciypE8xP2Dbzo03obFzgOxR5J9_Wf4r6tM0TM3KzGKO9-9pgmxLsRbIP9FSZfHf2iY1DtvvuIru7fI3eklLaWfzfWwp_vZCf3YtdWwiasOYP5clc2kIn8IqmvMBhAQj8V-X9XJltD4mKZGl-y3g',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMDkxMTUwNywiaWF0IjoxNzEwODI1MTA3LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIn0.Ls0YkNH8aox3_TyvbBABVF-__W_k2q0Q7rFAPM2cgDkZTTAIIQWv0FG93vZTsCRjLREXZTsJKHS9iA3fxjp1uLY2YJfQ9uAS9sLKANJZ8UBwZJCh8-2uq6HfWcKRSk86oqh3UjlFLeqtpB-Nx2V9m-Fq_45dPcAHYGUPn1F7GzA9X-KZ_cieOQaJnxFPbA7stqnX29iruWPcogOsmDNNhRJnZn68WXfj3cLzaaftWPx4ODR-ccyzIB12ruvITrgKdrGWfTzuxL_ZJuv89nVyVMFlHY2OqQKalu5rIgjIxr-SqqhPsuTM0ucqMrCDDV_oxdbkyD9_1bQriEbhL6LKtw',
  };

  refreshHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    refreshtoken: this.user.refreshToken,

    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });

  allPaths: any[] = [
    {
      id: 25,
      name: 'SDET(Software Development Engineer in Test) Fundamentals',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2F1-20230523-061044.jpg',
      isAccessible: true,
      noOfCourses: 6,
    },
    {
      id: 24,
      name: 'Automation Testing',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      isAccessible: true,
      noOfCourses: 3,
    },
    {
      id: 17,
      name: 'What does this word/tool mean/do?',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230308%2Fistockphoto14394578602048x2048-20230308-132135.jpg',
      isAccessible: true,
      noOfCourses: 2,
    },
    {
      id: 16,
      name: 'Building Client relationship & Stakeholder Management',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230210%2Fogimage-20230210-122614.jpg',
      isAccessible: true,
      noOfCourses: 2,
    },
    {
      id: 15,
      name: 'The Art of Communication',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230209%2Fimage9-20230209-192020.png',
      isAccessible: true,
      noOfCourses: 2,
    },
    {
      id: 13,
      name: 'SDLC (Software Development Life Cycle)',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230209%2Fimage7-20230209-184522.png',
      isAccessible: true,
      noOfCourses: 3,
    },
    {
      id: 10,
      name: 'Soft Skills',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230202%2Fimage1-20230202-091207.png',
      isAccessible: true,
      noOfCourses: 2,
    },
    {
      id: 8,
      name: 'Path for GO Developer',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230123%2Fgotraining-20230123-183832.jpeg',
      isAccessible: true,
      noOfCourses: 6,
    },
    {
      id: 6,
      name: 'Angular for Beginners  ',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221212/undertow1311464728280820252upload-20221212-065612',
      isAccessible: true,
      noOfCourses: 3,
    },
    {
      id: 4,
      name: 'Java SDE 1',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221125/undertow3155367536785396246upload-20221125-120057',
      isAccessible: true,
      noOfCourses: 11,
    },
    {
      id: 3,
      name: 'Automation Testing -Web UI',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221011/undertow12192064357437446870upload-20221011-121851',
      isAccessible: true,
      noOfCourses: 10,
    },
    {
      id: 2,
      name: 'Spring',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221011/undertow12494810420979393389upload-20221011-114934',
      isAccessible: true,
      noOfCourses: 6,
    },
  ];
  ongoingPaths: any = {
    data: {
      averageProgress: 75,
      count: 2,
      enrolledPaths: [
        {
          pathId: 6,
          pathName: 'Angular for Beginners  ',
          imageUrl:
            'https://storage.googleapis.com/zopping-uploads/originals/20221212/undertow1311464728280820252upload-20221212-065612',
          noOfCourses: 3,
          enrolledAt: '2024-02-28T11:59:50.453+00:00',
          completedAt: null,
          isAccessible: true,
          progress: 55,
        },
        {
          pathId: 4,
          pathName: 'Java SDE 1',
          imageUrl:
            'https://storage.googleapis.com/zopping-uploads/originals/20221125/undertow3155367536785396246upload-20221125-120057',
          noOfCourses: 11,
          enrolledAt: '2024-01-10T08:41:38.292+00:00',
          completedAt: null,
          isAccessible: true,
          progress: 95,
        },
      ],
    },
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    setInterval(() => {
      this.getRefreshToken().subscribe((res: any) => {
        localStorage.setItem('token', res.data.accessToken);
        console.log('token refreshed');
      });
    }, 60000);
  }
  private cache: any = null;
  private allPathDataSubject = new BehaviorSubject<any>({});
  allPathsData$ = this.allPathDataSubject.asObservable();
  getPaths() {
    if (this.cache != null) {
      this.allPathDataSubject.next(this.cache);
    } else {
      this.http
        .get(
          'https://api.training.zopsmart.com/students/paths?pageSize=10&pageNo=1'
        )
        .subscribe((data) => {
          console.log(data);
          this.cache = data;
          this.allPathDataSubject.next(this.cache);
        });
    }
  }

  getPathData(id: string) {
    return this.http.get(
      'https://api.training.zopsmart.com/students/paths/' +
        id +
        '?projection=course',
    );
  }
  getData() {
    return this.http.get(
      'https://api.training.zopsmart.com/students/paths?pageSize=12&pageNo=1'
    );
  }
  getOngoingPathsData() {
    return this.http.get(
      'https://api.training.zopsmart.com/students/enrolled-paths'
    );
  }
  getRefreshToken() {
    return this.http.post(
      'https://api.training.zopsmart.com/login/refresh',
      {
        organizationId: 2,
        currentRole: 'student',
      },
      {
        headers: this.refreshHeader,
      },
    );
  }
}
