import { Component, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedUser:User = null;

  constructor(private authenticationService:AuthenticationService,
              private router:Router){
    this.authenticationService.loggedUserObservable.subscribe(
      (u:User)=>{
        this.loggedUser = u;
      }
    );
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate([""]);
  }
  
   
}
