import { User } from './User';

export interface CreateCourse {
  about: string;
  collaboratorEmailIds: string[];
  collaboratorIds: number[];
  description: string;
  imageUrl: string;
  isAccessible: boolean;
  isOwner?: boolean;
  level: string;
  name: string;
  prerequisites: any[];
  resources: any[];
}

export interface CreateChapter {
  name: string;
  resources: Resource[];
  quizzes: Quiz[];
}

export interface Resource {
  id?: string;
  resourceName: string;
  resourceLink: string;
  resourceType: string;
}

export interface CreateResource {
  resourceName: string;
  resourceLink: string;
  resourceType: string;
}

export interface Quiz {
  id?: string;
  quizType: string;
  name: string;
  quizLink: string;
  link?: string;
  quizCreator?: string;
  passingMarks: number;
}

export interface CreateCoursePayload {
  resources: Resource[];
  quizzes: Quiz[];
  name: string;
}

export interface CreateCourseResponse {
  courseId: number;
  courseName: string;
  imageUrl: string;
  isAccessible: boolean;
  isOwner: boolean;
  description: string;
  about: string;
  level: string;
  prerequisites: any[]; // Replace any[] with the appropriate type if you know what objects prerequisites can contain
  createdBy: User;
  createdAt: string;
  updatedAt: string;
  collaborators: User[];
}
