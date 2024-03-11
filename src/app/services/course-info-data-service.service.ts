import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseInfoDataServiceService {
  courseInfo: any = {
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
  getData() {
    return this.courseInfo;
  }
  constructor() {}
}
