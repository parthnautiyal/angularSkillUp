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

export interface Resource {
  resourceName: string;
  resourceLink: string;
  resourceType: string;
}

export interface Quiz {
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
