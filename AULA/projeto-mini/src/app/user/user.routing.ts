import { GuardService } from './../services/guard.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

const routes:Routes = [
    {path:'',component:LoginUserComponent},
    {path:'login',component:LoginUserComponent},
    {path:'list',component:ListUserComponent, canActivate: [GuardService]},
    {path:'register',component:RegisterUserComponent},
    {path:'edit/:id',component:EditUserComponent, canActivate: [GuardService]},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);