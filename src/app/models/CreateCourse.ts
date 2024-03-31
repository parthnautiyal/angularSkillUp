export interface CreateCourse {
  about: string;
  collaboratorEmailIds: string[];
  collaboratorIds: number[];
  description: string;
  imageUrl: string;
  isAccessible: boolean;
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

export interface Quiz {
  id?: string;
  quizType: string;
  name: string;
  quizLink: string;
  passingMarks: number;
}

export interface CreateCoursePayload {
  resources: Resource[];
  quizzes: Quiz[];
  name: string;
}
