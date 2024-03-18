import { Injectable } from '@angular/core';
import { Paths } from '../models/Paths';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class PathDataService {
  user: any = {
    token:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMDczODgyNSwiaWF0IjoxNzEwNzM4NTI1LCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIiwidXNlcklkIjozMzJ9.UVTqkLw_u4cohaTj6UPHdByj2mJFWZ58k2QkI9t-DecDGHb98UnAM4UYTRRk5ZsK45OblsFezfBad7mloeBr3m-C1g_znC5gA5fMyFiHP8psgwu29FZUmGefcLZgjSwO7c9FPm_kERnxSAqgiQkzY1s8HfJ9RdxGwOi3CunBuej6Xv387bcqOeHYAV2ozw4-8hK-5vnr5zRwFzp0lTZoSk5_bP3lxQ8z25z5wDRTyTgBvzc54-Y8a_uGcwL-mVjp8cuKucX9u0cIexV_ZYzLPv-kdXzpjhQS9XvQZJre6Rkx7q5mWj_OlaBgMq6IdIxKs7BGuy1GZsyjA_BCWApJiw',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMDgyNDkyNSwiaWF0IjoxNzEwNzM4NTI1LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIn0.L4falt7LlJHQbKntGuieKh4WBbVMGcvxKIFnTdFiLoAXR6g7TfwtOyJ6XIax8oQEd3b-k9ikyN0zfVibIswl7hUzBO0ytBRd1-RIK80jFgX2Wcxm5ZDeKsXMVzqoAn-EmiqlKXTBaTgNFmv6xmMnUJoRT2XYivk9GM5cFLeUDd9jFzg5BbBfTSZUAfejNQVDOD-R_F7OfzeGsopnjJWRkMFlnO0ZB1ND2WKFjdi2XTuXLUCKfILTmgZjFRS8cWFa2q_pKQunfPQ1pEsWgk-LjgtzqIqCM512I0VY_5YRgbFEenycTWkLa2Kp0FtDURYBg-LelJfa8bPtA1WBgrkCPA',
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
  pathInfo: any = {
    id: 25,
    name: 'SDET(Software Development Engineer in Test) Fundamentals',
    imageUrl:
      'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2F1-20230523-061044.jpg',
    about:
      'This path covers the fundamentals required for becoming a SDET.\nA SDET is who performs manual testing and identify bugs in all platforms & also knows automation as well as CI/CD.',
    createdBy: {
      id: 202,
      name: 'Varun K',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocLDFqdEaZI5FqUJ1r27gAVR7gqI6bbbbY3pF3KUqRW5qg=s96-c',
      email: 'varun.k@zopsmart.com',
    },
    createdAt: '2023-05-23T06:30:08.491+00:00',
    updatedAt: '2023-08-09T11:14:42.891+00:00',
    noOfCourses: 6,
    isEnrolled: false,
    isCompleted: false,
    courses: [
      {
        id: 108,
        name: 'Software Testing Basics',
        about:
          'This path covers manual testing types, test case scenarios, design, and thinking like a tester.  \nPrerequistes:\n1. Should have the basic knowledge of SDLC.\n\nCourse Link:\nhttps://training.zopsmart.com/path/13',
        isAccessible: true,
        createdBy: {
          id: 202,
          name: 'Varun K',
          imageUrl:
            'https://lh3.googleusercontent.com/a/ACg8ocLDFqdEaZI5FqUJ1r27gAVR7gqI6bbbbY3pF3KUqRW5qg=s96-c',
          email: 'varun.k@zopsmart.com',
        },
        imageUrl:
          'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2Fsoftwaretesting-20230523-064401.jpg',
        createdAt: '2023-05-23T06:44:25.964+00:00',
        enrolledAt: null,
        completedAt: null,
        progress: 0,
      },
      {
        id: 39,
        name: 'Introduction to Git (Automation Testing)',
        about:
          'Git is free and open source software for distributed version control:\n tracking changes in any set of files, usually used for coordinating \nwork among programmers collaboratively developing source code during \nsoftware development.',
        isAccessible: true,
        createdBy: {
          id: 40,
          name: 'Raihana Benazir',
          imageUrl:
            'https://lh3.googleusercontent.com/a/AAcHTte4dmWLKgd0UNgoHTYlMa1SCLlBQxX6NyQHwKVK8W6yKQ=s96-c',
          email: 'raihana.benazir@zopsmart.com',
        },
        imageUrl:
          'https://storage.googleapis.com/zopping-uploads/originals/20221011/undertow1589127794411964407upload-20221011-123724',
        createdAt: '2022-10-10T08:37:23.990+00:00',
        enrolledAt: null,
        completedAt: null,
        progress: 0,
      },
      {
        id: 109,
        name: 'GitHub Actions for Regression Suite',
        about:
          'GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. As a SDET its we should have a knowledge on CI/CD.',
        isAccessible: true,
        createdBy: {
          id: 202,
          name: 'Varun K',
          imageUrl:
            'https://lh3.googleusercontent.com/a/ACg8ocLDFqdEaZI5FqUJ1r27gAVR7gqI6bbbbY3pF3KUqRW5qg=s96-c',
          email: 'varun.k@zopsmart.com',
        },
        imageUrl:
          'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2Fimg0e2ed83b7-20230523-070723.webp',
        createdAt: '2023-05-23T07:08:24.522+00:00',
        enrolledAt: null,
        completedAt: null,
        progress: 0,
      },
      {
        id: 73,
        name: 'Java: Basic',
        about:
          "Before actually starting learning a coding language, it's always good to get a good grasp of the basics of the same like creating a Hello World Program, program execution, printing statements, data types, input and output in java, loops, conditional statements, etc.\n",
        isAccessible: true,
        createdBy: {
          id: 143,
          name: 'Shaurya Agarwal',
          imageUrl:
            'https://lh3.googleusercontent.com/a/ACg8ocIYDKWjnZP5IPtzA5nnlgWIblDwAaY6YPsOlb6vJEZY=s96-c',
          email: 'shaurya.agarwal@zopsmart.com',
        },
        imageUrl:
          'https://storage.googleapis.com/zopping-uploads/originals%2F20230216%2Fdownload-20230216-075808.png',
        createdAt: '2023-02-16T07:58:51.643+00:00',
        enrolledAt: '2024-01-10T08:42:38.869+00:00',
        completedAt: '2024-02-13T06:10:41.469+00:00',
        progress: 100,
      },
      {
        id: 41,
        name: 'JavaScript For Beginners ',
        about:
          'This course contains the basic topic of JavaScript.\n\n1 What is JavaScript\n2 Setting Up the Development Environment \n3 JavaScript in Browsers\n4 Separation of Concerns\n5 JavaScript in Node\n6 Variables\n7 Constants\n8 Primitive Types \n9 Dynamic Typing \n10 Objects\n11 Arrays\n12 Functions\n13 Types of Functions  ',
        isAccessible: true,
        createdBy: {
          id: 42,
          name: 'Nyaz Khan',
          imageUrl:
            'https://lh3.googleusercontent.com/a/ACg8ocLrbhR9XtQkSguvDBFiK8RDHz3ePbcMrjruU2QG84kOOg=s96-c',
          email: 'nyaz.khan@zopsmart.com',
        },
        imageUrl:
          'https://storage.googleapis.com/zopping-uploads/originals/20221016/undertow621704271190208131upload-20221016-192524',
        createdAt: '2022-10-16T19:42:21.383+00:00',
        enrolledAt: '2024-03-04T06:35:48.081+00:00',
        completedAt: null,
        progress: 75,
      },
      {
        id: 111,
        name: 'SQL (Structured Query Language)',
        about:
          'Structured query language (SQL) is a programming language for storing and processing information in a relational database. A relational database stores information in tabular form, with rows and columns representing different data attributes and the various relationships between the data values. As a SDET it helps us to do DataBase Testing.',
        isAccessible: true,
        createdBy: {
          id: 202,
          name: 'Varun K',
          imageUrl:
            'https://lh3.googleusercontent.com/a/ACg8ocLDFqdEaZI5FqUJ1r27gAVR7gqI6bbbbY3pF3KUqRW5qg=s96-c',
          email: 'varun.k@zopsmart.com',
        },
        imageUrl:
          'https://storage.googleapis.com/zopping-uploads/originals%2F20230529%2FAWSSQLServerPricingAWSSQLServerMeaning1024x774-20230529-061222.png',
        createdAt: '2023-05-29T06:15:27.751+00:00',
        enrolledAt: null,
        completedAt: null,
        progress: 0,
      },
    ],
    progress: 0,
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {
    setInterval(() => {
      this.getRefreshToken().subscribe((res: any) => {
        localStorage.setItem('token', res.data.accessToken);
        console.log('token refreshed');
      });
    }, 60000);
  }

  getPaths() {
    return this.http.get(
      'https://api.training.zopsmart.com/students/paths?pageSize=10&pageNo=1',
    );
  }

  getPathData(id: string) {
    return this.http.get(
      'https://api.training.zopsmart.com/students/paths/' +
        id +
        '?projection=course',
    );
  }
  getData() {
    return this.allPaths;
  }
  getOngoingPathsData() {
    return this.ongoingPaths.data.enrolledPaths;
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
