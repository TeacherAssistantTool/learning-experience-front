import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPatientPageRoutingModule } from './signup-patient-routing.module';

import { SignupPatientPage } from './signup-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPatientPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SignupPatientPage]
})
export class SignupPatientPageModule {}
