import * as PathCreateActions from './path-create.action';
import { Course } from 'src/app/models/Course';
import { User } from 'src/app/models/User';
import { Quiz, Resource } from 'src/app/models/CreateCourse';

describe('Path Create Actions', () => {
  it('should create the setPathCreateCourse action', () => {
    const selectedCourses: Course[] = [{
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
    }];
    const action = PathCreateActions.setPathCreateCourse({ selectedCourses });
    expect(action.type).toEqual('[Path-Create] Set Path Create Course');
    expect(action.selectedCourses).toEqual(selectedCourses);
  });

  it('should create the setPathCreateCollaborators action', () => {
    const selectedCollaborators: User[] = [{
      email: 'john.doe@example.com',
      id: 1,
      imageUrl: 'https://example.com/john-doe.jpg',
      name: 'John Doe',
      isActive: true,
    }];
    const action = PathCreateActions.setPathCreateCollaborators({ selectedCollaborators });
    expect(action.type).toEqual('[Path-Create] Set Path Create Collaborators');
    expect(action.selectedCollaborators).toEqual(selectedCollaborators);
  });

  it('should create the deletePathCreateCollaborator action', () => {
    const selectedCollaborators: User[] = [{
      email: 'john.doe@example.com',
      id: 1,
      imageUrl: 'https://example.com/john-doe.jpg',
      name: 'John Doe',
      isActive: true,
    }];
    const action = PathCreateActions.deletePathCreateCollaborator({ selectedCollaborators });
    expect(action.type).toEqual('[Path-Create] Delete Path Create Collaborator');
    expect(action.selectedCollaborators).toEqual(selectedCollaborators);
  });

  it('should create the setPathCreateImage action', () => {
    const img = 'https://example.com/sample_image.jpg';
    const action = PathCreateActions.setPathCreateImage({ img });
    expect(action.type).toEqual('[Path-Create] Set Path Create Image');
    expect(action.img).toEqual(img);
  });

  it('should create the setPathCreateImageUploaded action', () => {
    const action = PathCreateActions.setPathCreateImageUploaded();
    expect(action.type).toEqual('[Path-Create] Set Path Create Image Uploaded');
  });

  it('should create the setPathCreateImageFailed action', () => {
    const action = PathCreateActions.setPathCreateImageFailed();
    expect(action.type).toEqual('[Path-Create] Set Path Create Image Failed');
  });

  it('should create the setResource action', () => {
    const resource: Resource = {
      resourceName: 'Sample Resource',
      resourceLink: 'https://example.com/sample-resource',
      resourceType: 'Article'
    };;
    const action = PathCreateActions.setResource({ resource });
    expect(action.type).toEqual('[Path-Create] Set Resource');
    expect(action.resource).toEqual(resource);
  });

  it('should create the setQuiz action', () => {
    const quiz: Quiz = {
      quizType: 'Multiple Choice',
      name: 'Sample Quiz',
      quizLink: 'https://example.com/sample-quiz',
      passingMarks: 70
    };
    const action = PathCreateActions.setQuiz({ quiz });
    expect(action.type).toEqual('[Path-Create] Set Quiz');
    expect(action.quiz).toEqual(quiz);
  });
});
