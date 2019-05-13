import { Component, OnDestroy, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loggedUser:User = null;

  constructor(private authenticationService:AuthenticationService,
              private router:Router){}

  ngOnInit(){
    this.authenticationService.loggedUserObservable.subscribe(
      (u:User)=>{
        this.loggedUser = u;
      }
    ); //o app se inscreve para ser notificado quando a o valor desse observável mudar. Daí sim, ele altera o html.
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate([""]);
  }
  
   
}
