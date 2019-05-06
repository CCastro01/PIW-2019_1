import { HomeComponent } from './core/home/home.component';
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
  {path:'',component:LoginUserComponent},
  {path:'home',component:HomeComponent},
  {path:'users/register',component:RegisterUserComponent},
  {path:'users/list',component:ListUserComponent},
  {path:'users/edit/:id',component:EditUserComponent}
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
