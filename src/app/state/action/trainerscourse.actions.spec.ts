import * as TrainersCourseAction from './trainerscourse.actions';
import { Course } from 'src/app/models/Course';

describe('Trainers Course Action', () => {
  it('should handle the Load Trainers Courses Action', () => {
    const action = TrainersCourseAction.loadTrainersCourses({pageNo: 2});
    expect(action.type).toEqual('[Trainer Courses] Load Trainer Courses');
  });

  it('should handle Load Trainers Course Success Action', () => {
    const courses: Course[] = [{
      id: 1,
      name: "Introduction to TypeScript",
      courseName: "Intro to TS",
      imageUrl: "http://example.com/course.jpg",
      isAccessible: true,
      description: "This is a beginner's course on TypeScript.",
      about: "In this course, you will learn the basics of TypeScript.",
      createdBy: {
        id: 101,
        name: "John Doe",
        imageUrl: "http://example.com/john.jpg",
        email: "john@example.com"
      },
      createdAt: "2024-03-24T13:46:46.000Z",
      isFavourite: false,
      progress: 0,
      enrolledAt: "2024-03-24T13:46:46.000Z",
      completedAt: "",
      noOfChapters: 10,
      updatedAt: "2024-03-24T13:46:46.000Z",
      level: 1
    }
    ];
    const action = TrainersCourseAction.loadTrainersCoursesSuccess({courses});
    expect(action.type).toEqual('[Trainer Courses] Load Trainer Courses Success');
    expect(action.courses).toEqual(courses);
  });

  it('should handle Load Trainers Course Failed Action', () => {
    const error = 'Error message';
    const action = TrainersCourseAction.loadTrainersCoursesFailure({error});
    expect(action.type).toEqual('[Trainer Courses] Load Trainer Courses Failure');
    expect(action.error).toEqual(error);
  });
})