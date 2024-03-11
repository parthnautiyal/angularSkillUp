import { Injectable } from '@angular/core';
import { Paths } from '../types/Paths';
@Injectable({
  providedIn: 'root',
})
export class PathDataService {
  allPaths: Paths[] = [
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2F1-20230523-061044.jpg',
      title: 'SDET',
      courses: 6,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2F1-20230523-061044.jpg',
      title: 'SDET',
      courses: 6,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2F1-20230523-061044.jpg',
      title: 'SDET',
      courses: 6,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2F1-20230523-061044.jpg',
      title: 'SDET',
      courses: 6,
    },
    {
      image:
        'https://storage.googleapis.com/zopping-uploads/originals%2F20230523%2FAutomationTesting-20230523-064020.png',
      title: 'Automation Testing',
      courses: 3,
    },
  ];

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
          isVisited: true,
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
          isVisited: true,
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
  constructor() {}
  getData() {
    return this.allPaths;
  }
  getChapterData() {
    return this.allChapters;
  }
}
