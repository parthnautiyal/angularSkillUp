import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BatchDataService {
  constructor(private https: HttpClient) {}
  url: string = 'https://api.training.zopsmart.com/student/batches/';

  getAllBatches() {
    return this.https.get(this.url + '/all');
  }

  getBatchById(id: string) {
    return this.https.get(this.url + id);
  }

  getPathById(id: string) {
    return this.https.get(this.url + id + '/paths');
  }
  getTrainersById(id: string) {
    return this.https.get(this.url + id + '/trainers');
  }
  getStudentsById(id: string) {
    return this.https.get(this.url + id + '/students');
  }
}
