import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-banner',
  templateUrl: './courses-banner.component.html',
  styleUrls: ['./courses-banner.component.sass'],
})
export class CoursesBannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  CourseDetails: any = {
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
}
