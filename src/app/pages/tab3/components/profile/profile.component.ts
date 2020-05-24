import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  moveToTeacherList() {
    this.router.navigateByUrl('/teacher-list');
  }

  moveToPatientList() {
    this.router.navigateByUrl('/patient-list');
  }

  moveToSignupPatient() {
    this.router.navigateByUrl('/signup-patient');
  }

  moveToSignupTeacher() {
    this.router.navigateByUrl('/signup-teacher');
  }

}
