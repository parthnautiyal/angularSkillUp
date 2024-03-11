import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BatchDataService {
  batchCardArray: any[] = [
    {
      id: 18,
      name: 'Java Batch - 2024-01-09',
      createdBy: {
        id: 329,
        name: 'Parth Nautiyal',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocJ-UYULwlUTJq_wSGyLl4JHwkUW3xdpUynNTbejdnca=s96-c',
        email: 'parth.nautiyal@zopsmart.com',
      },
      createdAt: '2024-01-09T07:15:08.358+00:00',
      endDate: '2024-02-06T00:00:00.000+00:00',
      streamName: 'Java',
      noOfTrainers: 2,
      noOfStudents: 11,
      noOfPaths: 1,
      isAccessible: true,
    },
    {
      id: 18,
      name: 'Java Batch - 2024-01-09',
      createdBy: {
        id: 329,
        name: 'Parth Nautiyal',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocJ-UYULwlUTJq_wSGyLl4JHwkUW3xdpUynNTbejdnca=s96-c',
        email: 'parth.nautiyal@zopsmart.com',
      },
      createdAt: '2024-01-09T07:15:08.358+00:00',
      endDate: '2024-02-06T00:00:00.000+00:00',
      streamName: 'Java',
      noOfTrainers: 2,
      noOfStudents: 11,
      noOfPaths: 1,
      isAccessible: true,
    },
  ];

  getData() {
    return this.batchCardArray;
  }

  constructor() {}
}
