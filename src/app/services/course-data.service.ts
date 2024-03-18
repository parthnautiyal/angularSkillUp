import { Injectable } from '@angular/core';
import { Course } from '../models/Course';
import { HttpClient } from '@angular/common/http';

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
  courseAbout: any = {
    id: 114,
    name: 'JavaScript Monthly Forum Sessions',
    description: 'This is a sample description of course',
    isAccessible: true,
    imageUrl:
      'https://storage.googleapis.com/zopping-uploads/5282/images/originals/20231027/Screenshot20231027at114313AM-20231027-061337.webp',
    createdBy: {
      id: 42,
      name: 'Nyaz Khan',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocLrbhR9XtQkSguvDBFiK8RDHz3ePbcMrjruU2QG84kOOg=s96-c',
      email: 'nyaz.khan@zopsmart.com',
    },
    isFavourite: false,
    about:
      "JS Monthly Forum serves as a dynamic platform where developers come together to deliver engaging sessions and webinars focused on various technical aspects of front-end development. Within this course, you will find an extensive repository housing all the vital elements of these sessions and webinars. This includes comprehensive session details, a wealth of valuable resources, essential documents, and enlightening videos. Whether you're a seasoned developer or a newcomer to the world of front-end development, this course offers a wealth of knowledge and content to help you stay informed and up-to-date in this ever-evolving field. \n\nGoogle chat link: https://chat.google.com/room/AAAA2W1mETw?cls=7\n\nMeeting link: https://meet.google.com/uof-txrr-dpa\n\nMeeting timing:  4th Wednesday of every month | 3:00 pm - 4:00 pm \n\n\n\nFor any doubts and queries Please connect with \nName - Nyaz Khan \nPhone. no - 9017697290\nEmail id - nyaz.khan@zopsmart.com",
    isEnrolled: true,
    createdAt: '2023-10-27T06:30:45.014+00:00',
    updatedAt: '2023-10-27T10:03:09.198+00:00',
    completedAt: null,
    level: 'Beginner',
    noOfChapters: 1,
    noOfResources: 0,
    noOfEnrollments: 12,
    progress: 0,
  };
  allChapters: any = [
    {
      id: 165,
      name: 'Understanding Java',
      resourceResponses: [
        {
          id: 374,
          resourceName: 'Introduction to Java language',
          resourceLink:
            'https://www.geeksforgeeks.org/introduction-to-java/?ref=lbp',
          isCompleted: true,
          isVisited: false,
        },
        {
          id: 375,
          resourceName: 'Evolution of Java',
          resourceLink: 'https://dev.java/evolution/',
          isCompleted: false,
          isVisited: false,
        },
      ],
      quizResponses: [
        {
          id: 32,
          name: 'Access Specifiers and Basics',
          link: 'https://testpaper.app/quiz/coding-practices',
          status: 'PASS',
          quizType: 'TEST_PAPER',
        },
      ],
      progress: 100,
    },
    {
      id: 156,
      name: 'Getting Started with Java',
      resourceResponses: [
        {
          id: 345,
          resourceName: 'Basic Java Syntax',
          resourceLink: 'https://www.geeksforgeeks.org/java-basic-syntax/',
          isCompleted: false,
          isVisited: false,
        },
        {
          id: 346,
          resourceName: 'The Hello World Program',
          resourceLink:
            'https://www.geeksforgeeks.org/java-hello-world-program/',
          isCompleted: false,
          isVisited: false,
        },
        {
          id: 347,
          resourceName: 'Datatypes',
          resourceLink: 'https://www.geeksforgeeks.org/data-types-in-java/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 376,
          resourceName: 'Input Operation in Java',
          resourceLink:
            'https://www.geeksforgeeks.org/how-to-take-input-from-user-in-java/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 378,
          resourceName: 'Conditional Statements and Loops',
          resourceLink:
            'https://dev.java/learn/language-basics/controlling-flow/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 379,
          resourceName: 'Introduction to Arrays',
          resourceLink: 'https://dev.java/learn/language-basics/arrays/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 382,
          resourceName: 'Output operation in Java',
          resourceLink:
            'https://www.geeksforgeeks.org/system-out-println-in-java/',
          isCompleted: true,
          isVisited: true,
        },
      ],
      quizResponses: [
        {
          id: 42,
          name: 'Java Basics',
          link: 'https://testpaper.app/quiz/java-basics',
          status: 'PASS',
          quizType: 'TEST_PAPER',
        },
      ],
      progress: 100,
    },
    {
      id: 158,
      name: 'Strings',
      resourceResponses: [
        {
          id: 349,
          resourceName: 'String - Part I',
          resourceLink: 'https://www.geeksforgeeks.org/strings-in-java/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 350,
          resourceName: 'String Class',
          resourceLink: 'https://www.geeksforgeeks.org/string-class-in-java/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 351,
          resourceName: 'String - Part II',
          resourceLink: 'https://dev.java/learn/numbers-strings/strings/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 389,
          resourceName: 'String Buffer',
          resourceLink: 'https://www.javatpoint.com/StringBuffer-class',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 390,
          resourceName: 'String Builder ',
          resourceLink: 'https://www.javatpoint.com/StringBuilder-class',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 391,
          resourceName: 'Difference between String and StringBuffer',
          resourceLink:
            'https://www.javatpoint.com/difference-between-string-and-stringbuffer',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 392,
          resourceName: 'Difference between StringBuffer and StringBuilder',
          resourceLink:
            'https://www.javatpoint.com/difference-between-stringbuffer-and-stringbuilder',
          isCompleted: true,
          isVisited: true,
        },
      ],
      quizResponses: [
        {
          id: 43,
          name: 'Strings',
          link: 'https://testpaper.app/quiz/strings-8d38fd2c',
          status: 'FAIL',
          quizType: 'TEST_PAPER',
        },
      ],
      progress: 87,
    },
    {
      id: 159,
      name: 'OOPs - Object Oriented Programming',
      resourceResponses: [
        {
          id: 352,
          resourceName: 'Understanding Classes and Objects',
          resourceLink: 'https://dev.java/learn/oop/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 353,
          resourceName: 'What is OOPs?',
          resourceLink:
            'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 354,
          resourceName: 'Inheritance',
          resourceLink: 'https://www.geeksforgeeks.org/inheritance-in-java/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 355,
          resourceName: 'Abstraction',
          resourceLink: 'https://www.geeksforgeeks.org/abstraction-in-java-2/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 356,
          resourceName: 'Encapsulation',
          resourceLink: 'https://www.geeksforgeeks.org/encapsulation-in-java/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 357,
          resourceName: 'Polymorphism',
          resourceLink: 'https://www.geeksforgeeks.org/polymorphism-in-java/',
          isCompleted: true,
          isVisited: true,
        },
      ],
      quizResponses: [
        {
          id: 44,
          name: 'Object Oriented Programming',
          link: 'https://testpaper.app/quiz/oops-d27c366f',
          status: 'PASS',
          quizType: 'TEST_PAPER',
        },
      ],
      progress: 100,
    },
    {
      id: 160,
      name: 'Collections',
      resourceResponses: [
        {
          id: 358,
          resourceName: 'Collections Framework',
          resourceLink: 'https://www.geeksforgeeks.org/collections-in-java-2/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 359,
          resourceName: 'Collections Hierarchy',
          resourceLink:
            'https://dev.java/learn/api/collections-framework/organization/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 360,
          resourceName: 'Collection Interface in Java',
          resourceLink:
            'https://www.geeksforgeeks.org/collection-interface-in-java-with-examples/',
          isCompleted: true,
          isVisited: true,
        },
      ],
      quizResponses: [
        {
          id: 31,
          name: 'Collections in Java',
          link: 'https://testpaper.app/quiz/collections',
          status: 'PASS',
          quizType: 'TEST_PAPER',
        },
      ],
      progress: 100,
    },
    {
      id: 161,
      name: 'Annotations',
      resourceResponses: [
        {
          id: 361,
          resourceName: 'What are Annotations',
          resourceLink: 'https://www.geeksforgeeks.org/annotations-in-java/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 362,
          resourceName: 'Annotations - Advanced',
          resourceLink: 'https://dev.java/learn/annotations/',
          isCompleted: true,
          isVisited: true,
        },
      ],
      quizResponses: [
        {
          id: 55,
          name: 'Annotations and Generics',
          link: 'https://testpaper.app/quiz/annotations-and-generics-696dac04',
          status: 'PASS',
          quizType: 'TEST_PAPER',
        },
      ],
      progress: 100,
    },
    {
      id: 162,
      name: 'Generics',
      resourceResponses: [
        {
          id: 363,
          resourceName: 'Introduction to Generics',
          resourceLink: 'https://dev.java/learn/generics/intro/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 364,
          resourceName: 'Generics Type Inference',
          resourceLink: 'https://dev.java/learn/generics/type-inference/',
          isCompleted: true,
          isVisited: true,
        },
      ],
      quizResponses: [],
      progress: 100,
    },
    {
      id: 163,
      name: 'Exception Handling',
      resourceResponses: [
        {
          id: 365,
          resourceName: 'What are Exceptions',
          resourceLink:
            'https://dev.java/learn/exceptions/what-is-an-exception/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 366,
          resourceName: 'Types and hierarchy of exceptions',
          resourceLink: 'https://www.geeksforgeeks.org/exceptions-in-java/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 367,
          resourceName: 'Some useful Keywords',
          resourceLink:
            'https://www.geeksforgeeks.org/try-catch-throw-and-throws-in-java/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 368,
          resourceName: 'Handling Exceptions',
          resourceLink: 'https://dev.java/learn/exceptions/catching-handling/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 369,
          resourceName: 'Throwing Exceptions',
          resourceLink: 'https://dev.java/learn/exceptions/throwing/',
          isCompleted: true,
          isVisited: true,
        },
      ],
      quizResponses: [
        {
          id: 45,
          name: 'Exception handling & Logging',
          link: 'https://testpaper.app/quiz/exception-handling-c4fd9393',
          status: 'PASS',
          quizType: 'TEST_PAPER',
        },
      ],
      progress: 100,
    },
    {
      id: 192,
      name: 'Java Database Connectivity',
      resourceResponses: [],
      quizResponses: [
        {
          id: 116,
          name: 'JDBC',
          link: 'https://testpaper.app/quiz/jdbc',
          status: 'PASS',
          quizType: 'TEST_PAPER',
        },
      ],
      progress: 100,
    },
    {
      id: 191,
      name: 'JUnit Testing',
      resourceResponses: [],
      quizResponses: [
        {
          id: 117,
          name: 'JUnit Testing',
          link: 'https://testpaper.app/quiz/testing-94cb9e77',
          status: 'PASS',
          quizType: 'TEST_PAPER',
        },
      ],
      progress: 100,
    },
  ];
  ongoingCourse: any = [
    {
      courseId: 51,
      courseName: 'Angular ',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221212/undertow252983219079039197upload-20221212-065735',
      createdBy: {
        id: 42,
        name: 'Nyaz Khan',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocLrbhR9XtQkSguvDBFiK8RDHz3ePbcMrjruU2QG84kOOg=s96-c',
        email: 'nyaz.khan@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-02-29T07:59:58.045+00:00',
      completedAt: null,
      isAccessible: true,
      progress: 0,
    },
    {
      courseId: 111,
      courseName: 'SQL (Structured Query Language)',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230529%2FAWSSQLServerPricingAWSSQLServerMeaning1024x774-20230529-061222.png',
      createdBy: {
        id: 202,
        name: 'Varun K',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocLDFqdEaZI5FqUJ1r27gAVR7gqI6bbbbY3pF3KUqRW5qg=s96-c',
        email: 'varun.k@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-03-10T12:58:49.635+00:00',
      completedAt: null,
      isAccessible: true,
      progress: 0,
    },
    {
      courseId: 44,
      courseName:
        'How to understand what is going on while an application is running',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221125/undertow9438611154114105184upload-20221125-122301',
      createdBy: {
        id: 25,
        name: 'Ujjawal Misra',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocJkwPuYKqDGIt1l98-5Dz7gs-_qW7Beb5-kWq_uJ8nVYNQ=s96-c',
        email: 'ujjawal.misra@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-01-28T15:32:03.675+00:00',
      completedAt: null,
      isAccessible: true,
      progress: 66,
    },
    {
      courseId: 45,
      courseName: 'Testing the Application',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221206/undertow6930786489534491427upload-20221206-073318',
      createdBy: {
        id: 32,
        name: 'Prashanth Kolakani',
        imageUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxZW_zeZd8v4QwqL6-Yu4HnAtqRTiWDjhccR-fE3=s96-c',
        email: 'prashanth.kolakani@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-02-02T11:16:08.232+00:00',
      completedAt: null,
      isAccessible: true,
      progress: 92,
    },
    {
      courseId: 41,
      courseName: 'JavaScript For Beginners ',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221016/undertow621704271190208131upload-20221016-192524',
      createdBy: {
        id: 42,
        name: 'Nyaz Khan',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocLrbhR9XtQkSguvDBFiK8RDHz3ePbcMrjruU2QG84kOOg=s96-c',
        email: 'nyaz.khan@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-02-28T12:00:43.129+00:00',
      completedAt: null,
      isAccessible: true,
      progress: 69,
    },
    {
      courseId: 50,
      courseName: 'HTML CSS',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221212/undertow6972714991236417219upload-20221212-063225',
      createdBy: {
        id: 42,
        name: 'Nyaz Khan',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocLrbhR9XtQkSguvDBFiK8RDHz3ePbcMrjruU2QG84kOOg=s96-c',
        email: 'nyaz.khan@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-02-28T12:00:04.560+00:00',
      completedAt: null,
      isAccessible: true,
      progress: 97,
    },
    {
      courseId: 53,
      courseName: 'Cassandra Tutorial',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221214/undertow18122309931659273157upload-20221214-063251',
      createdBy: {
        id: 62,
        name: 'Anvita Shrivastava',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocL1pWDQcneMyjtND_UxAJML_4zcBju-7II5c3g1pSe8=s96-c',
        email: 'anvita.shrivastava@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-01-10T13:29:35.447+00:00',
      completedAt: null,
      isAccessible: true,
      progress: 95,
    },
    {
      courseId: 72,
      courseName: 'Git ',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230216%2Fgitlogo-20230216-060442.png',
      createdBy: {
        id: 32,
        name: 'Prashanth Kolakani',
        imageUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxZW_zeZd8v4QwqL6-Yu4HnAtqRTiWDjhccR-fE3=s96-c',
        email: 'prashanth.kolakani@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-01-10T08:41:49.038+00:00',
      completedAt: '2024-01-12T16:47:48.002+00:00',
      isAccessible: true,
      progress: 100,
    },
    {
      courseId: 21,
      courseName: 'Spring Boot',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221011/undertow9938004490337506287upload-20221011-120334',
      createdBy: {
        id: 32,
        name: 'Prashanth Kolakani',
        imageUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxZW_zeZd8v4QwqL6-Yu4HnAtqRTiWDjhccR-fE3=s96-c',
        email: 'prashanth.kolakani@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-01-12T16:58:10.288+00:00',
      completedAt: '2024-02-07T04:05:40.680+00:00',
      isAccessible: true,
      progress: 100,
    },
    {
      courseId: 20,
      courseName: 'Spring',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221014/undertow7592949801295228878upload-20221014-071143',
      createdBy: {
        id: 32,
        name: 'Prashanth Kolakani',
        imageUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxZW_zeZd8v4QwqL6-Yu4HnAtqRTiWDjhccR-fE3=s96-c',
        email: 'prashanth.kolakani@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-01-12T16:57:42.899+00:00',
      completedAt: '2024-02-07T03:51:55.758+00:00',
      isAccessible: true,
      progress: 100,
    },
    {
      courseId: 78,
      courseName: 'Docker',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230228%2Fc83c4886b2154cf0a97364b8f65e7003-20230228-093745.png',
      createdBy: {
        id: 17,
        name: 'Prakhyat Saini',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocLbkJ3Gp4diIhr6sRRRrPpyNtVEgsUV-zpDHbDWxRbh=s96-c',
        email: 'prakhyat.saini@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-02-02T11:36:20.195+00:00',
      completedAt: '2024-02-02T12:10:48.725+00:00',
      isAccessible: true,
      progress: 100,
    },
    {
      courseId: 77,
      courseName: 'Java JDBC',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230228%2Fdownload-20230228-064013.jpeg',
      createdBy: {
        id: 32,
        name: 'Prashanth Kolakani',
        imageUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxZW_zeZd8v4QwqL6-Yu4HnAtqRTiWDjhccR-fE3=s96-c',
        email: 'prashanth.kolakani@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-02-02T11:23:03.203+00:00',
      completedAt: '2024-02-14T10:47:53.773+00:00',
      isAccessible: true,
      progress: 100,
    },
    {
      courseId: 73,
      courseName: 'Java: Basic',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230216%2Fdownload-20230216-075808.png',
      createdBy: {
        id: 143,
        name: 'Shaurya Agarwal',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocIYDKWjnZP5IPtzA5nnlgWIblDwAaY6YPsOlb6vJEZY=s96-c',
        email: 'shaurya.agarwal@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-01-10T08:42:25.900+00:00',
      completedAt: '2024-02-02T12:19:46.338+00:00',
      isAccessible: true,
      progress: 100,
    },
    {
      courseId: 52,
      courseName: 'Redis',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221213/undertow1896520197779811884upload-20221213-033152',
      createdBy: {
        id: 17,
        name: 'Prakhyat Saini',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocLbkJ3Gp4diIhr6sRRRrPpyNtVEgsUV-zpDHbDWxRbh=s96-c',
        email: 'prakhyat.saini@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-02-07T03:53:03.469+00:00',
      completedAt: '2024-02-14T10:49:19.706+00:00',
      isAccessible: true,
      progress: 100,
    },
    {
      courseId: 54,
      courseName: 'Kafka',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221214/undertow14025742655045417734upload-20221214-074420',
      createdBy: {
        id: 5,
        name: 'Bhavya Gupta',
        imageUrl:
          'https://lh3.googleusercontent.com/a/AAcHTteH2swYGdG9ijp_TvGitg7Y7CQA1zcu2soeq-EuUH3e=s96-c',
        email: 'bhavya.gupta@zopsmart.com',
      },
      isFavourite: false,
      enrolledAt: '2024-02-07T03:53:19.185+00:00',
      completedAt: '2024-02-07T03:54:14.982+00:00',
      isAccessible: true,
      progress: 100,
    },
  ];
  constructor(private http: HttpClient) {}
  getData() {
    return this.allCourses;
  }
  getAboutInfo() {
    return this.courseAbout;
  }
  getChapterData() {
    return this.allChapters;
  }
  getOngoingCourses() {
    return this.ongoingCourse;
  }

  getCourseData() {
    return this.http.get(
      'https://api.training.zopsmart.com/students/courses?pageSize=12&pageNo=1'
    );
  }
}
