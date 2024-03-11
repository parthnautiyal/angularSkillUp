import { Injectable } from '@angular/core';
import { Course } from '../types/Course';

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
  allCourses: any[] = [
    {
      id: 114,
      name: 'JavaScript Monthly Forum Sessions',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/5282/images/originals/20231027/Screenshot20231027at114313AM-20231027-061337.webp',
      isAccessible: true,
      description: 'This is a sample description of course',
      createdBy: {
        id: 42,
        name: 'Nyaz Khan',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocLrbhR9XtQkSguvDBFiK8RDHz3ePbcMrjruU2QG84kOOg=s96-c',
        email: 'nyaz.khan@zopsmart.com',
      },
      createdAt: '2023-10-27T06:30:45.014+00:00',
      isFavourite: false,
    },
    {
      id: 113,
      name: '1:1 Training',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/images%2Foriginals%2F20230713%2Fimages-20230713-130637.png',
      isAccessible: true,
      description: 'This is a sample description of course',
      createdBy: {
        id: 134,
        name: 'Ansuman Padhy',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocIPXulYvHPKK_2DEQNe1LkzKxaWcPQrf5vs0vIN3rOVrQ=s96-c',
        email: 'ansuman.padhy@zopsmart.com',
      },
      createdAt: '2023-07-13T13:09:46.983+00:00',
      isFavourite: false,
    },
    {
      id: 111,
      name: 'SQL (Structured Query Language)',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230529%2FAWSSQLServerPricingAWSSQLServerMeaning1024x774-20230529-061222.png',
      isAccessible: true,
      description: 'This is a sample description of course',
      createdBy: {
        id: 202,
        name: 'Varun K',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocLDFqdEaZI5FqUJ1r27gAVR7gqI6bbbbY3pF3KUqRW5qg=s96-c',
        email: 'varun.k@zopsmart.com',
      },
      createdAt: '2023-05-29T06:15:27.751+00:00',
      isFavourite: false,
    },
    {
      id: 110,
      name: 'API Testing (Manual + Automation)',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2F19Apitesting-20230523-084304.jpg',
      isAccessible: true,
      description: 'This is a sample description of course',
      createdBy: {
        id: 202,
        name: 'Varun K',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocLDFqdEaZI5FqUJ1r27gAVR7gqI6bbbbY3pF3KUqRW5qg=s96-c',
        email: 'varun.k@zopsmart.com',
      },
      createdAt: '2023-05-23T08:43:15.621+00:00',
      isFavourite: false,
    },
    {
      id: 109,
      name: 'GitHub Actions for Regression Suite',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2Fimg0e2ed83b7-20230523-070723.webp',
      isAccessible: true,
      description: 'This is a sample description of course',
      createdBy: {
        id: 202,
        name: 'Varun K',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocLDFqdEaZI5FqUJ1r27gAVR7gqI6bbbbY3pF3KUqRW5qg=s96-c',
        email: 'varun.k@zopsmart.com',
      },
      createdAt: '2023-05-23T07:08:24.522+00:00',
      isFavourite: false,
    },
    {
      id: 108,
      name: 'Software Testing Basics',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2Fsoftwaretesting-20230523-064401.jpg',
      isAccessible: true,
      description: 'This is a sample description of course',
      createdBy: {
        id: 202,
        name: 'Varun K',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocLDFqdEaZI5FqUJ1r27gAVR7gqI6bbbbY3pF3KUqRW5qg=s96-c',
        email: 'varun.k@zopsmart.com',
      },
      createdAt: '2023-05-23T06:44:25.964+00:00',
      isFavourite: false,
    },
    {
      id: 107,
      name: 'Mobile Automation by using Appium',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230522%2F0mhXJLwuGNZbh1VA-20230522-114705.png',
      isAccessible: true,
      description: 'This is a sample description of course',
      createdBy: {
        id: 202,
        name: 'Varun K',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocLDFqdEaZI5FqUJ1r27gAVR7gqI6bbbbY3pF3KUqRW5qg=s96-c',
        email: 'varun.k@zopsmart.com',
      },
      createdAt: '2023-05-22T11:47:34.117+00:00',
      isFavourite: false,
    },
    {
      id: 106,
      name: 'Web UI Automation using WebDriverIO',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230522%2Fwebdriverio-20230522-103230.png',
      isAccessible: true,
      description: 'This is a sample description of course',
      createdBy: {
        id: 202,
        name: 'Varun K',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocLDFqdEaZI5FqUJ1r27gAVR7gqI6bbbbY3pF3KUqRW5qg=s96-c',
        email: 'varun.k@zopsmart.com',
      },
      createdAt: '2023-05-22T10:33:03.948+00:00',
      isFavourite: false,
    },
    {
      id: 80,
      name: "Employee Productivity Tools & It's Usage",
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230308%2F15762367325661574728882735EmployeeTrainingDevelopment-20230308-151804.jpg',
      isAccessible: true,
      description: 'This is a sample description of course',
      createdBy: {
        id: 134,
        name: 'Ansuman Padhy',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocIPXulYvHPKK_2DEQNe1LkzKxaWcPQrf5vs0vIN3rOVrQ=s96-c',
        email: 'ansuman.padhy@zopsmart.com',
      },
      createdAt: '2023-03-08T15:20:32.683+00:00',
      isFavourite: false,
    },
    {
      id: 79,
      name: 'Jargons????',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230308%2Ffinancialterms-20230308-133422.jpg',
      isAccessible: true,
      description: 'This is a sample description of course',
      createdBy: {
        id: 134,
        name: 'Ansuman Padhy',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocIPXulYvHPKK_2DEQNe1LkzKxaWcPQrf5vs0vIN3rOVrQ=s96-c',
        email: 'ansuman.padhy@zopsmart.com',
      },
      createdAt: '2023-03-08T13:45:09.298+00:00',
      isFavourite: false,
    },
    {
      id: 78,
      name: 'Docker',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230228%2Fc83c4886b2154cf0a97364b8f65e7003-20230228-093745.png',
      isAccessible: true,
      description: 'This is a sample description of course',
      createdBy: {
        id: 17,
        name: 'Prakhyat Saini',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocLbkJ3Gp4diIhr6sRRRrPpyNtVEgsUV-zpDHbDWxRbh=s96-c',
        email: 'prakhyat.saini@zopsmart.com',
      },
      createdAt: '2023-02-28T09:38:54.213+00:00',
      isFavourite: false,
    },
    {
      id: 77,
      name: 'Java JDBC',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230228%2Fdownload-20230228-064013.jpeg',
      isAccessible: true,
      description: 'This is a sample description of course',
      createdBy: {
        id: 32,
        name: 'Prashanth Kolakani',
        imageUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxZW_zeZd8v4QwqL6-Yu4HnAtqRTiWDjhccR-fE3=s96-c',
        email: 'prashanth.kolakani@zopsmart.com',
      },
      createdAt: '2023-02-28T06:49:46.416+00:00',
      isFavourite: false,
    },
  ];

  getData() {
    return this.allCourses;
  }
  constructor() {}
}
