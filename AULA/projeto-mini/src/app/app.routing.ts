import { GuardService } from './services/guard.service';
import { Routes, RouterModule } from '@angular/router';

import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';


const routes:Routes = [
    {path:'',component:LoginUserComponent},
    {path:'list/user',component:ListUserComponent, canActivate: [GuardService]},
    {path:'register/user',component:RegisterUserComponent},
    {path:'edit/user/:id',component:EditUserComponent, canActivate: [GuardService]},

    // otherwise redirect to login
    { path: '**', redirectTo: '' }
  ];

export const routing = RouterModule.forRoot(routes);