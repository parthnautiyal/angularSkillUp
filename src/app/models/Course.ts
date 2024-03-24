export interface Course {
  id: number;
  name: string;
  courseName: string;
  imageUrl: string;
  isAccessible: boolean;
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
  enrolledAt: string;
  completedAt: string | null;
}
