import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MiscellaneousService } from './services/miscellaneous.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [MessageService],
})
export class AppComponent {
  constructor(private mis: MiscellaneousService) {
    interval(60000) // 60000 milliseconds = 1 minute
      .pipe(
        startWith(0),
        switchMap(() => this.mis.getRefreshToken())
      )
      .subscribe((res: any) => {
        localStorage.setItem('token', res.data.accessToken);
      });
  }
  runTest(i: number) {}

  title = 'Skill Up';
  loggedIn: boolean = true;
  handleEvent(event: boolean) {
    this.loggedIn = event;
  }
}
