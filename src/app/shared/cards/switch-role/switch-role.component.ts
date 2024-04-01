import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-switch-role',
  templateUrl: './switch-role.component.html',
  styleUrls: ['./switch-role.component.sass'],
})
export class SwitchRoleComponent implements OnInit {
  trainerActive: boolean = true;
  roles: string[] = ['Student', 'Trainer'];
  localStorageRole: string = localStorage.getItem('selectedRole') || 'TRAINER';

  constructor(private router: Router) {
    this.trainerActive = this.localStorageRole === 'TRAINER';
  }

  setTrainerActive() {
    this.trainerActive = true;
    localStorage.setItem('selectedRole', 'TRAINER');
    window.location.reload();
  }

  setStudentActive() {
    this.trainerActive = false;
    localStorage.setItem('selectedRole', 'STUDENT');
    window.location.reload();
  }

  ngOnInit(): void {}
}
