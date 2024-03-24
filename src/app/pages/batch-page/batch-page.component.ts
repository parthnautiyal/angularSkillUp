import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  loadBatchById,
  loadBatchPathById,
  loadStudentsById,
  loadTrainersById,
} from 'src/app/state/action/batch.action';
import {
  selectBatchById,
  selectBatchPaths,
  selectBatchsError,
  selectBatchsLoadingById,
  selectStudents,
  selectStudentsLoading,
  selectTrainers,
  selectTrainersLoading,
} from 'src/app/state/selector/batch.selector';
import { User } from 'src/app/models/User';
import { Batch } from 'src/app/models/Batch';
import { Course } from 'src/app/models/Course';
import { Observable, combineLatest } from 'rxjs';
import { Path } from 'src/app/models/Path';
import { ThemeService } from 'src/app/services/theme.service';
import { selectPathsLoading } from 'src/app/state/selector/path.selector';

@Component({
  selector: 'app-batch-page',
  templateUrl: './batch-page.component.html',
  styleUrls: ['./batch-page.component.sass'],
})
export class BatchPageComponent implements OnInit {
  id: string = '';
  loading:boolean=true;
  trainerData: User[] = [];
  studentData: User[] = [];
  batchDetails: Batch = {
    createdAt: '',
    createdBy: {
      email: '',
      id: 0,
      imageUrl: '',
      name: '',
      isActive: false,
    },
    endDate: '',
    id: 0,
    isAccessible: false,
    name: '',
    noOfPaths: 0,
    noOfStudents: 0,
    noOfTrainers: 0,
    streamName: '',
    startDate: '',
    stream: {
      streamId: 0,
      streamName: '',
    },
    progress: 0,
  };
  paths: Course = {
    id: 0,
    name: '',
    courseName: '',
    imageUrl: '',
    isAccessible: false,
    description: '',
    about: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
    createdAt: '',
    isFavourite: false,
    progress: 0,
    enrolledAt: '',
    completedAt: '',
    noOfChapters: 0,
    updatedAt: '',
    level: 0,
  };
  batchById$!: Observable<boolean>;
  paths$!: Observable<boolean>;
  students$!: Observable<boolean>;
  trainer$!: Observable<boolean>;
  sub: any;
  error:boolean = false;
  


  constructor(private store: Store, private router: ActivatedRoute) {
    this.id = this.router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.store.dispatch(loadBatchById({ id: this.id }));
    this.store.dispatch(loadBatchPathById({ id: this.id }));
    this.store.dispatch(loadStudentsById({ id: this.id }));
    this.store.dispatch(loadTrainersById({ id: this.id }));
    this.store.select(selectBatchById).subscribe((batch) => {
      this.batchDetails = batch;
    });
    this.store.select(selectBatchPaths).subscribe((path) => {
      this.paths = path;
    });
    this.store.select(selectStudents).subscribe((students) => {
      this.studentData = students;
    });
    this.store.select(selectTrainers).subscribe((trainers) => {
      this.trainerData = trainers;
    });
    this.batchById$ = this.store.select(selectBatchsLoadingById);
    this.students$ = this.store.select(selectStudentsLoading);
    this.paths$ = this.store.select(selectPathsLoading);
    this.trainer$ = this.store.select(selectTrainersLoading);
    combineLatest([this.batchById$,this.students$,this.paths$,this.trainer$]).subscribe(([batch,students,path,trainers])=>{
      if (!batch && !students && !path && !trainers){
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }else{
        this.loading = true;
      }
    });
    this.store.select(selectBatchsError).subscribe((res)=>{
      if (res!=null){
        this.error = true;
      }
    });
  }
}
