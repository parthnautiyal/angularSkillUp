import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  HostListener,
} from '@angular/core';
import { MessageService } from 'primeng/api';

declare var google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    localStorage.setItem('login', 'false');
    console.log('destroyed');
    this.showSuccess();
  }

  ngOnInit(): void {
    localStorage.setItem('login', 'true');
    console.log('init');
  }
  @Output() eventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  handelButtonClick() {
    this.eventEmitter.emit(true);
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'LoggedIn',
      detail: 'Loggin  Successfull',
    });
  }
}
