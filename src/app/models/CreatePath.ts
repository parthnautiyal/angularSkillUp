import { User } from './User';

export interface CreatePath {
  about: string;
  collaboratorEmailIds: string[];
  collaboratorIds: number[];
  courseIds: number[];
  description: string;
  imageUrl: string;
  isAccessible: boolean;
  name: string;
  isOwner?: boolean;
  createdBy?: User;
}

export interface CourseResponse {
  courseId: number;
  courseName: string;
  imageUrl: string;
  about: string;
  createdBy: User;
  createdAt: string;
  isAccessible: boolean;
  isAuthorised: boolean;
}

export interface PathResponseData {
  pathId: number;
  pathName: string;
  imageUrl: string;
  isAccessible: boolean;
  isOwner: boolean;
  description: string;
  about: string;
  createdBy: User;
  createdAt: string;
  updatedAt: string;
  collaborators: any[];
  courses: CourseResponse[];
  courseIds: number[];
}
