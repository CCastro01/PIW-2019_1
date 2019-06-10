import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

import { RegisterUserComponent } from '../user/register-user/register-user.component';
import { ListUserComponent } from '../user/list-user/list-user.component';
import { EditUserComponent } from '../user/edit-user/edit-user.component';
import { LoginUserComponent } from '../user/login-user/login-user.component';
import { routing } from './user.routing'; 


@NgModule({
  declarations: [RegisterUserComponent, ListUserComponent, EditUserComponent, LoginUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    routing
  ]
})
export class UserModule { }
