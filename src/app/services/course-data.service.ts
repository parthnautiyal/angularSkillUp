import { Injectable } from '@angular/core';
import { Course } from '../models/Course';

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
          isCompleted: true,
          isVisited: true,
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
          isCompleted: true,
          isVisited: false,
        },
        {
          id: 346,
          resourceName: 'The Hello World Program',
          resourceLink:
            'https://www.geeksforgeeks.org/java-hello-world-program/',
          isCompleted: true,
          isVisited: true,
        },
        {
          id: 347,
          resourceName: 'Datatypes',
          resourceLink: 'https://www.geeksforgeeks.org/data-types-in-java/',
          isCompleted: false,
          isVisited: false,
        },
        {
          id: 376,
          resourceName: 'Input Operation in Java',
          resourceLink:
            'https://www.geeksforgeeks.org/how-to-take-input-from-user-in-java/',
          isCompleted: false,
          isVisited: false,
        },
        {
          id: 378,
          resourceName: 'Conditional Statements and Loops',
          resourceLink:
            'https://dev.java/learn/language-basics/controlling-flow/',
          isCompleted: false,
          isVisited: true,
        },
        {
          id: 379,
          resourceName: 'Introduction to Arrays',
          resourceLink: 'https://dev.java/learn/language-basics/arrays/',
          isCompleted: false,
          isVisited: false,
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
  constructor() {}
  getData() {
    return this.allCourses;
  }
  getAboutInfo() {
    return this.courseAbout;
  }
  getChapterData() {
    return this.allChapters;
  }
}
