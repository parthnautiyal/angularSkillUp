import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-about-section',
  templateUrl: './course-about-section.component.html',
  styleUrls: ['./course-about-section.component.sass'],
})
export class CourseAboutSectionComponent implements OnInit {
  about: String =
    "JS Monthly Forum serves as a dynamic platform where developers come together to deliver engaging sessions and webinars focused on various technical aspects of front-end development. Within this course, you will find an extensive repository housing all the vital elements of these sessions and webinars. This includes comprehensive session details, a wealth of valuable resources, essential documents, and enlightening videos. Whether you're a seasoned developer or a newcomer to the world of front-end development, this course offers a wealth of knowledge and content to help you stay informed and up-to-date in this ever-evolving field. \n \n Google chat link: https://chat.google.com/room/AAAA2W1mETw?cls=7\n\nMeeting link: https://meet.google.com/uof-txrr-dpa\n\nMeeting timing:  4th Wednesday of every month | 3:00 pm - 4:00 pm \n\n\n\nFor any doubts and queries Please connect with \nName - Nyaz Khan \nPhone. no - 9017697290\nEmail id - nyaz.khan@zopsmart.com";

  constructor() {}

  ngOnInit(): void {}
}
