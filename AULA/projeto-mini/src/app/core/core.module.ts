import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [RegisterUserComponent, ListUserComponent, EditUserComponent],
  exports: [RegisterUserComponent, ListUserComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
