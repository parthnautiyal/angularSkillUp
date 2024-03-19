import { User } from './User';

export interface Batch {
  createdAt: string;
  createdBy: User;
  endDate: string;
  id: number;
  isAccessible: boolean;
  name: string;
  noOfPaths: number;
  noOfStudents: number;
  noOfTrainers: number;
  streamName: string;
}


export interface BatchList {
    data: Batch[];
}
