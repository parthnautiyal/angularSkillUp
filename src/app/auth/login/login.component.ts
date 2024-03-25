import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  HostListener,
} from '@angular/core';
import { MessageService } from 'primeng/api';

declare let window: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  constructor(private messageService: MessageService) {

    
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    localStorage.setItem('login', 'false');
    this.showSuccess();
  }

  ngOnInit(): void {
    localStorage.setItem('login', 'true');
    window.handleCredentialResponse = this.handleCredentialResponse.bind(this);
  }
  @Output() eventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleButtonClick(): void {
    this.eventEmitter.emit(true);
  }

  showSuccess(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'LoggedIn',
      detail: 'Loggin  Successful',
    });
  }

  decodeJWTToken(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleCredentialResponse(response: any): void {
    const responsePayload = this.decodeJWTToken(response.credential);
    sessionStorage.setItem('loggedInUser', JSON.stringify(responsePayload));
    window.location.href = '/dashboard';
  }
}
