import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ERROR, HEADINGS_TITLE } from 'src/app/constants/headingsTitle';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass'],
})
export class DashboardPageComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
  ) {
    console.log('Logged In');
    this.showSuccess();
  }
  loading: boolean = true;
  headingsTitle = HEADINGS_TITLE;
  error = ERROR;

  ngOnInit(): void {}
  showError(data: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: data,
    });
  }

  showSuccess() {
    this.messageService.add({
      severity: 'info',
      summary: 'Logged In',
      detail: 'Loggin Successful',
    });
  }
}
