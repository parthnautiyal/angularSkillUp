import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  HostListener,
} from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ThemeService } from 'src/app/services/theme.service';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';
import { environment } from 'src/environments/environment';

declare let window: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private themeService: ThemeService,
    private trainer: TrainerMiscellaneousService,
    private router: Router
  ) {
    this.themeService.isDarkMode().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }
  googleClientId = environment.googleClientId;
  isDarkMode: boolean = false;

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    localStorage.setItem('login', 'false');
  }

  ngOnInit(): void {
    this.loadGoogleIdentityLibrary();
    localStorage.setItem('login', 'true');
    window.handleCredentialResponse = this.handleCredentialResponse.bind(this);
  }
  @Output() eventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleButtonClick(): void {
    this.eventEmitter.emit(true);
  }

  decodeJWTToken(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleCredentialResponse(response: any): void {
    const responsePayload = this.decodeJWTToken(response.credential);
    sessionStorage.setItem('loggedInUser', JSON.stringify(responsePayload));
    this.trainer.success('Logged In successfully');
    this.router.navigate(['/dashboard']);
    // window.location.href = '/dashboard';
  }
  loadGoogleIdentityLibrary() {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
}
