export interface Course {
  id: number;
    name: string;
    courseName: string;
    imageUrl: string;
    isAccessible: boolean;
    description: string;
    createdBy: {
        id: number;
        name: string;
        imageUrl: string;
        email: string;
    };
    createdAt: string;
    isFavourite: boolean;
}

export interface CourseList {
  data: Course[];
}
