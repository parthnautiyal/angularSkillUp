export interface Path {
  id: number;
  name: string;
  pathName: string;
  imageUrl: string;
  isAccessible: boolean;
  noOfCourses: number;
}

export interface PathList {
  data: Path[];
}
