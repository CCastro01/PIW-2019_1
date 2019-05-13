import { HomeComponent } from './core/home/home.component';
import { GuardService } from './services/guard.service';
import { RegisterUserComponent } from './core/register-user/register-user.component';
import { EditUserComponent } from './core/edit-user/edit-user.component';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginUserComponent } from './core/login-user/login-user.component';
import { ListUserComponent } from './core/list-user/list-user.component';

const routes:Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginUserComponent},
  {path:'users/register',component:RegisterUserComponent},
  {path:'users/list',component:ListUserComponent, canActivate: [GuardService]},
  {path:'users/edit/:id',component:EditUserComponent, canActivate: [GuardService]},
  {path:'**',redirectTo:'login'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
