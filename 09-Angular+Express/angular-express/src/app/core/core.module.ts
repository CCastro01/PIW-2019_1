import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DisplayUserComponent } from './display-user/display-user.component';
import { InputUserComponent } from './input-user/input-user.component';

@NgModule({
  declarations: [DisplayUserComponent, InputUserComponent],
  exports: [DisplayUserComponent, InputUserComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
