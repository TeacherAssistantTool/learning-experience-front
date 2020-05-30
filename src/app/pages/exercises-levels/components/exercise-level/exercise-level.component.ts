import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exercise-level',
  templateUrl: './exercise-level.component.html',
  styleUrls: ['./exercise-level.component.scss'],
})
export class ExerciseLevelComponent implements OnInit {

  constructor(
    private router: Router,
    private zone: NgZone
    ) { }

  ngOnInit() {}

  public toExercisePage(){
    this.zone.run(() => this.router.navigate(['/exercise-one']));
  }

}