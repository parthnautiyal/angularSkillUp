import { Course } from './Course';
import { User } from './User';

export interface CreatedBy {
  id: number;
  name: string;
  imageUrl: string;
  email: string;
}

export interface TrainerPathData {
  pathId: number;
  pathName: string;
  imageUrl: string;
  isAccessible: boolean;
  isOwner: boolean;
  description: string;
  about: string;
  createdBy: CreatedBy;
  createdAt: string;
  updatedAt: string;
  collaborators: User[];
  courses: Course[];
  courseIds: number[];
}
