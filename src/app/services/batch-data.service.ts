import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  studentArray: any[] = [
    {
      id: 324,
      name: 'Ishanya Yadav',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocK7-tc1z0XHQWjTVPMlFU-ile1s6XanwQdUh-ISUXbY=s96-c',
      email: 'ishanya.yadav@zopsmart.com',
      isActive: true,
    },
    {
      id: 325,
      name: 'Pravishti Bhardwaj',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocKGGWNcvRac83s7iVtyX61DYNbohnREvmIKX1iC6lT8=s96-c',
      email: 'pravishti.bhardwaj@zopsmart.com',
      isActive: true,
    },
    {
      id: 326,
      name: 'Prabal Sharma',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocJSnfP_tAtcoCzb_iLFRQsJvfwnqBbfcm9QxoPvPVdOFA=s96-c',
      email: 'prabal.sharma@zopsmart.com',
      isActive: true,
    },
    {
      id: 328,
      name: 'Nilesh Chopra',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocLLJImkcOTW5SYffWbfJfhEmjiUbbZ2J7MxzQwTnPgQXA=s96-c',
      email: 'nilesh.chopra@zopsmart.com',
      isActive: true,
    },
    {
      id: 329,
      name: 'Parth Nautiyal',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocJ-UYULwlUTJq_wSGyLl4JHwkUW3xdpUynNTbejdnca=s96-c',
      email: 'parth.nautiyal@zopsmart.com',
      isActive: true,
    },
    {
      id: 330,
      name: 'Baneet Dhawan',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocLGglOZdFYXYtz3jFS7CmP1S16WJWvA0DhF2CTeqxf6=s96-c',
      email: 'baneet.dhawan@zopsmart.com',
      isActive: true,
    },
    {
      id: 331,
      name: 'Aashirwad Yadav',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocKKorMy1JHY0BH25g-GZyxmYu8mXW5AS9o-uS7UEk9K=s96-c',
      email: 'aashirwad.yadav@zopsmart.com',
      isActive: true,
    },
    {
      id: 332,
      name: 'Chandan Kumar Saha',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocK_hSrRouMuk2rkzqgJ4VB3tVC8H6KknBRQaMkRYyoAYg=s96-c',
      email: 'chandan.saha@zopsmart.com',
      isActive: true,
    },
    {
      id: 333,
      name: 'Aditya Bhardwaj',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocIXzFBqpEjHnHYVbt7aXmPuZ9WvNkYxci2EDwk2u9nB=s96-c',
      email: 'aditya.bhardwaj@zopsmart.com',
      isActive: true,
    },
    {
      id: 334,
      name: 'Aditya Singh',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocKG3CRw0wJzhEHQYO1RWBG5B2TF3fvwqK2fsPvuEjMY=s96-c',
      email: 'aditya.s@zopsmart.com',
      isActive: true,
    },
  ];

  trainersArray: any[] = [
    {
      id: 17,
      name: 'Prakhyat Saini',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocLbkJ3Gp4diIhr6sRRRrPpyNtVEgsUV-zpDHbDWxRbh=s96-c',
      email: 'prakhyat.saini@zopsmart.com',
      isActive: true,
    },
    {
      id: 62,
      name: 'Anvita Shrivastava',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocL1pWDQcneMyjtND_UxAJML_4zcBju-7II5c3g1pSe8=s96-c',
      email: 'anvita.shrivastava@zopsmart.com',
      isActive: true,
    },
  ];

  paths: any[] = [
    {
      id: 4,
      name: 'Java SDE 1',
      describe:
        'This path covers the essentials required for becoming a Java SDE 1.\nA Java SDE 1 is someone who can work on developmental activities independently. To do so, you should be able to understand the problem statement, come up with a solution or changes required, write a well-tested code, and submit it for review. You should be able to take care of the following language, framework, project and organization guidelines that make your code readily acceptable.',
      imageUrl:
        'https://storage.googleapis.com/zopping-uploads/originals/20221125/undertow3155367536785396246upload-20221125-120057',
      isAccessible: true,
      createdBy: {
        id: 25,
        name: 'Ujjawal Misra',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocJkwPuYKqDGIt1l98-5Dz7gs-_qW7Beb5-kWq_uJ8nVYNQ=s96-c',
        email: 'ujjawal.misra@zopsmart.com',
      },
      createdAt: '2022-11-25T12:01:16.962+00:00',
      about: 'This is the path to be coming a Java SDE 1',
      isActive: true,
      enrolledAt: '2024-01-10T09:38:00.694+00:00',
      completedAt: null,
      progress: 94,
    },
  ];

  batchDetails: any[] = [
    {
      id: 18,
      name: 'Java Batch - 2024-01-09',
      createdBy: {
        id: 25,
        name: 'Ujjawal Misra',
        imageUrl:
          'https://lh3.googleusercontent.com/a/ACg8ocJkwPuYKqDGIt1l98-5Dz7gs-_qW7Beb5-kWq_uJ8nVYNQ=s96-c',
        email: 'ujjawal.misra@zopsmart.com',
      },
      createdAt: '2024-01-09T07:15:08.358+00:00',
      startDate: '2024-01-09T00:00:00.000+00:00',
      endDate: '2024-02-06T00:00:00.000+00:00',
      stream: {
        streamId: 1,
        streamName: 'Java',
      },
      isAccessible: true,
      progress: 94,
    },
  ];
  getData() {
    return this.batchCardArray;
  }

  getBatchData() {
    return [
      this.batchDetails,
      this.studentArray,
      this.trainersArray,
      this.paths,
    ];
  }

  constructor(private https: HttpClient) {}

  getBatchDetails() {
    return this.https.get(
      'https://api.training.zopsmart.com/student/batches/all',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
      },
    );
  }

  getBatchById(id: string) {
    return this.https.get(
      'https://api.training.zopsmart.com/student/batches/18'
    );
  }

  getPathById(id: string) {
    return this.https.get(
      'https://api.training.zopsmart.com/student/batches/18/paths'
    );
  }
  getTrainersById(id: string) {
    return this.https.get(
      'https://api.training.zopsmart.com/student/batches/18/trainers'
    );
  }
  getStudentsById(id: string) {
    return this.https.get(
      'https://api.training.zopsmart.com/student/batches/18/students'
    );
  }
  private cache:any;
  private allBatchesSubject = new BehaviorSubject<any>({});
  allBatches$ = this.allBatchesSubject.asObservable();
  getBatchesDetails() {
    if (this.cache){
      this.allBatchesSubject.next(this.cache);
    }else {
      this.https.get(
        'https://api.training.zopsmart.com/student/batches/all',
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Referer: 'https://training.zopsmart.com/',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
          },
        }
      ).subscribe((data)=>{
        this.cache = data;
        this.allBatchesSubject.next(this.cache);
      });
    }
    
  }
}
