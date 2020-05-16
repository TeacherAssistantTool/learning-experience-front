import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExercisePagePage } from './exercise-page.page';

describe('ExercisePagePage', () => {
  let component: ExercisePagePage;
  let fixture: ComponentFixture<ExercisePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExercisePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
