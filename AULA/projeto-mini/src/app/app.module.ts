import { EditUserComponent } from './core/edit-user/edit-user.component';
import { ListUserComponent } from './core/list-user/list-user.component';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterUserComponent } from './core/register-user/register-user.component';

const routes:Routes = [
  {path:'',component:RegisterUserComponent},
  {path:'list/user',component:ListUserComponent},
  {path:'register/user',component:RegisterUserComponent},
  {path:'edit/user/:id',component:EditUserComponent}
];

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
