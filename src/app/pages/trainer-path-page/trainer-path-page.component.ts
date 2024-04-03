import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trainer-path-page',
  templateUrl: './trainer-path-page.component.html',
  styleUrls: ['./trainer-path-page.component.sass'],
})
export class TrainerPathPageComponent implements OnInit {
  id: number = 0;
  pathInfo: any;
  dataPresent: boolean = false;

  pathDataArray = [
    {
      pathId: 194,
      pathName: 'Java SDE',
      imageUrl:
        'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240401/b9d4df74-02d2-4f4b-9291-ec4275718673-Javascript.webp',
      isAccessible: false,
      isOwner: true,
      description:
        'This is path to be followed to become a proficient Java Developer by gaining the required skills',
      about:
        'This path contains courses on git for basic version control understanding, followed by Java Basics which is required to learn about basics functionalities of Java programming language, further containing course on Mockito and Junit required to learn the unit testing which is been done in java,  then it goes to kubernetes, Kafka, redis etc.',
      createdBy: {
        id: 322,
        name: 'Prabal Sharma',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocJSnfP_tAtcoCzb_iLFRQsJvfwnqBbfcm9QxoPvPVdOFA=s96-c',
        email: 'prabal.sharma@zopsmart.com',
      },
      createdAt: '2024-04-01T12:27:43.915+00:00',
      updatedAt: '2024-04-01T12:30:17.263+00:00',
      collaborators: [],
      courses: [
        {
          courseId: 290,
          courseName: 'Angular Test',
          imageUrl:
            'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240331/d194b7d3-8547-48ae-a567-a2c3f4bdf994-tnsBackground.webp',
          about: 'Create course test.Create course test.Create course test.',
          createdBy: {
            id: 324,
            name: 'Parth Nautiyal',
            imageUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocJ-UYULwlUTJq_wSGyLl4JHwkUW3xdpUynNTbejdnca=s96-c',
            email: 'parth.nautiyal@zopsmart.com',
          },
          createdAt: '2024-03-31T12:52:24.770+00:00',
          isAccessible: false,
          isAuthorised: false,
        },
        {
          courseId: 285,
          courseName: 'Testing',
          imageUrl:
            'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240330/a2311d79-9f6a-4137-ae4f-a757b3bb182f-Javascript.webp',
          about:
            'Testing creating path APITesting creating path APITesting creating path API',
          createdBy: {
            id: 326,
            name: 'Chandan Kumar Saha',
            imageUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocK_hSrRouMuk2rkzqgJ4VB3tVC8H6KknBRQaMkRYyoAYg=s96-c',
            email: 'chandan.saha@zopsmart.com',
          },
          createdAt: '2024-03-30T11:23:23.277+00:00',
          isAccessible: false,
          isAuthorised: false,
        },
      ],
      courseIds: [290, 285],
    },
    {
      pathId: 195,
      pathName: 'Angular SDE',
      imageUrl:
        'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240401/b9d4df74-02d2-4f4b-9291-ec4275718673-Javascript.webp',
      isAccessible: false,
      isOwner: true,
      description:
        'This is path to be followed to become a proficient Java Developer by gaining the required skills',
      about:
        'This path contains courses on git for basic version control understanding, followed by Java Basics which is required to learn about basics functionalities of Java programming language, further containing course on Mockito and Junit required to learn the unit testing which is been done in java,  then it goes to kubernetes, Kafka, redis etc.',
      createdBy: {
        id: 322,
        name: 'Prabal Sharma',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocJSnfP_tAtcoCzb_iLFRQsJvfwnqBbfcm9QxoPvPVdOFA=s96-c',
        email: 'prabal.sharma@zopsmart.com',
      },
      createdAt: '2024-04-01T12:27:43.915+00:00',
      updatedAt: '2024-04-01T12:30:17.263+00:00',
      collaborators: [],
      courses: [
        {
          courseId: 290,
          courseName: 'Angular Test',
          imageUrl:
            'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240331/d194b7d3-8547-48ae-a567-a2c3f4bdf994-tnsBackground.webp',
          about: 'Create course test.Create course test.Create course test.',
          createdBy: {
            id: 324,
            name: 'Parth Nautiyal',
            imageUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocJ-UYULwlUTJq_wSGyLl4JHwkUW3xdpUynNTbejdnca=s96-c',
            email: 'parth.nautiyal@zopsmart.com',
          },
          createdAt: '2024-03-31T12:52:24.770+00:00',
          isAccessible: false,
          isAuthorised: false,
        },
        {
          courseId: 285,
          courseName: 'Testing',
          imageUrl:
            'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240330/a2311d79-9f6a-4137-ae4f-a757b3bb182f-Javascript.webp',
          about:
            'Testing creating path APITesting creating path APITesting creating path API',
          createdBy: {
            id: 326,
            name: 'Chandan Kumar Saha',
            imageUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocK_hSrRouMuk2rkzqgJ4VB3tVC8H6KknBRQaMkRYyoAYg=s96-c',
            email: 'chandan.saha@zopsmart.com',
          },
          createdAt: '2024-03-30T11:23:23.277+00:00',
          isAccessible: false,
          isAuthorised: false,
        },
      ],
      courseIds: [290, 285],
    },
    {
      pathId: 196,
      pathName: 'Testing SDE',
      imageUrl:
        'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240401/b9d4df74-02d2-4f4b-9291-ec4275718673-Javascript.webp',
      isAccessible: false,
      isOwner: true,
      description:
        'This is path to be followed to become a proficient Java Developer by gaining the required skills',
      about:
        'This path contains courses on git for basic version control understanding, followed by Java Basics which is required to learn about basics functionalities of Java programming language, further containing course on Mockito and Junit required to learn the unit testing which is been done in java,  then it goes to kubernetes, Kafka, redis etc.',
      createdBy: {
        id: 322,
        name: 'Prabal Sharma',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocJSnfP_tAtcoCzb_iLFRQsJvfwnqBbfcm9QxoPvPVdOFA=s96-c',
        email: 'prabal.sharma@zopsmart.com',
      },
      createdAt: '2024-04-01T12:27:43.915+00:00',
      updatedAt: '2024-04-01T12:30:17.263+00:00',
      collaborators: [],
      courses: [
        {
          courseId: 290,
          courseName: 'Angular Test',
          imageUrl:
            'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240331/d194b7d3-8547-48ae-a567-a2c3f4bdf994-tnsBackground.webp',
          about: 'Create course test.Create course test.Create course test.',
          createdBy: {
            id: 324,
            name: 'Parth Nautiyal',
            imageUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocJ-UYULwlUTJq_wSGyLl4JHwkUW3xdpUynNTbejdnca=s96-c',
            email: 'parth.nautiyal@zopsmart.com',
          },
          createdAt: '2024-03-31T12:52:24.770+00:00',
          isAccessible: false,
          isAuthorised: false,
        },
        {
          courseId: 285,
          courseName: 'Testing',
          imageUrl:
            'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240330/a2311d79-9f6a-4137-ae4f-a757b3bb182f-Javascript.webp',
          about:
            'Testing creating path APITesting creating path APITesting creating path API',
          createdBy: {
            id: 326,
            name: 'Chandan Kumar Saha',
            imageUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocK_hSrRouMuk2rkzqgJ4VB3tVC8H6KknBRQaMkRYyoAYg=s96-c',
            email: 'chandan.saha@zopsmart.com',
          },
          createdAt: '2024-03-30T11:23:23.277+00:00',
          isAccessible: false,
          isAuthorised: false,
        },
      ],
      courseIds: [290, 285],
    },
    {
      pathId: 197,
      pathName: 'Hello SDE',
      imageUrl:
        'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240401/b9d4df74-02d2-4f4b-9291-ec4275718673-Javascript.webp',
      isAccessible: false,
      isOwner: true,
      description:
        'This is path to be followed to become a proficient Java Developer by gaining the required skills',
      about:
        'This path contains courses on git for basic version control understanding, followed by Java Basics which is required to learn about basics functionalities of Java programming language, further containing course on Mockito and Junit required to learn the unit testing which is been done in java,  then it goes to kubernetes, Kafka, redis etc.',
      createdBy: {
        id: 322,
        name: 'Prabal Sharma',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocJSnfP_tAtcoCzb_iLFRQsJvfwnqBbfcm9QxoPvPVdOFA=s96-c',
        email: 'prabal.sharma@zopsmart.com',
      },
      createdAt: '2024-04-01T12:27:43.915+00:00',
      updatedAt: '2024-04-01T12:30:17.263+00:00',
      collaborators: [],
      courses: [
        {
          courseId: 290,
          courseName: 'Angular Test',
          imageUrl:
            'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240331/d194b7d3-8547-48ae-a567-a2c3f4bdf994-tnsBackground.webp',
          about: 'Create course test.Create course test.Create course test.',
          createdBy: {
            id: 324,
            name: 'Parth Nautiyal',
            imageUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocJ-UYULwlUTJq_wSGyLl4JHwkUW3xdpUynNTbejdnca=s96-c',
            email: 'parth.nautiyal@zopsmart.com',
          },
          createdAt: '2024-03-31T12:52:24.770+00:00',
          isAccessible: false,
          isAuthorised: false,
        },
        {
          courseId: 285,
          courseName: 'Testing',
          imageUrl:
            'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240330/a2311d79-9f6a-4137-ae4f-a757b3bb182f-Javascript.webp',
          about:
            'Testing creating path APITesting creating path APITesting creating path API',
          createdBy: {
            id: 326,
            name: 'Chandan Kumar Saha',
            imageUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocK_hSrRouMuk2rkzqgJ4VB3tVC8H6KknBRQaMkRYyoAYg=s96-c',
            email: 'chandan.saha@zopsmart.com',
          },
          createdAt: '2024-03-30T11:23:23.277+00:00',
          isAccessible: false,
          isAuthorised: false,
        },
      ],
      courseIds: [290, 285],
    },
    {
      pathId: 194,
      pathName: 'Java SDE',
      imageUrl:
        'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240401/b9d4df74-02d2-4f4b-9291-ec4275718673-Javascript.webp',
      isAccessible: false,
      isOwner: true,
      description:
        'This is path to be followed to become a proficient Java Developer by gaining the required skills',
      about:
        'This path contains courses on git for basic version control understanding, followed by Java Basics which is required to learn about basics functionalities of Java programming language, further containing course on Mockito and Junit required to learn the unit testing which is been done in java,  then it goes to kubernetes, Kafka, redis etc.',
      createdBy: {
        id: 322,
        name: 'Prabal Sharma',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocJSnfP_tAtcoCzb_iLFRQsJvfwnqBbfcm9QxoPvPVdOFA=s96-c',
        email: 'prabal.sharma@zopsmart.com',
      },
      createdAt: '2024-04-01T12:27:43.915+00:00',
      updatedAt: '2024-04-01T12:30:17.263+00:00',
      collaborators: [],
      courses: [
        {
          courseId: 290,
          courseName: 'Angular Test',
          imageUrl:
            'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240331/d194b7d3-8547-48ae-a567-a2c3f4bdf994-tnsBackground.webp',
          about: 'Create course test.Create course test.Create course test.',
          createdBy: {
            id: 324,
            name: 'Parth Nautiyal',
            imageUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocJ-UYULwlUTJq_wSGyLl4JHwkUW3xdpUynNTbejdnca=s96-c',
            email: 'parth.nautiyal@zopsmart.com',
          },
          createdAt: '2024-03-31T12:52:24.770+00:00',
          isAccessible: false,
          isAuthorised: false,
        },
        {
          courseId: 285,
          courseName: 'Testing',
          imageUrl:
            'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240330/a2311d79-9f6a-4137-ae4f-a757b3bb182f-Javascript.webp',
          about:
            'Testing creating path APITesting creating path APITesting creating path API',
          createdBy: {
            id: 326,
            name: 'Chandan Kumar Saha',
            imageUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocK_hSrRouMuk2rkzqgJ4VB3tVC8H6KknBRQaMkRYyoAYg=s96-c',
            email: 'chandan.saha@zopsmart.com',
          },
          createdAt: '2024-03-30T11:23:23.277+00:00',
          isAccessible: false,
          isAuthorised: false,
        },
      ],
      courseIds: [290, 285],
    },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  getPathById(id: number) {
    return this.pathDataArray.find((pathInfo) => pathInfo.pathId === id);
  }
  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.pathInfo = this.getPathById(this.id);

    if (!this.pathInfo) {
      this.dataPresent = false;
    } else {
      this.dataPresent = true;
    }
  }
}
