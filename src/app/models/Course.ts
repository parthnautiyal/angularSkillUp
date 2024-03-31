import { User } from "./User";

export interface Course {
  id: number;
  courseId?: number;
  name: string;
  courseName: string;
  imageUrl: string;
  isAccessible: boolean;
  isOwner?: boolean;
  isAuthorised?:boolean;
  description: string;
  about: string;
  createdBy: {
    id: number;
    name: string;
    imageUrl: string;
    email: string;
  };
  createdAt: string;
  isFavourite: boolean;
  progress: number;
  isEnrolled?: boolean;
  enrolledAt: string;
  completedAt: string;
  noOfChapters: number;
  updatedAt: string;
  level: number;
  collaborators?: User[];
}
