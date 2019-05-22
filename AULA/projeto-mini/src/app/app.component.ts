import { AuthUserService } from './services/auth-user.service';
import { Router } from '@angular/router';
import { User } from './models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  user:User = null;
  
  constructor(private router:Router,
              private authUserService:AuthUserService){
    
  }

  ngOnInit(): void {
    this.authUserService.userObservable.subscribe(
      (res:User)=>{
        this.user = res;
      }
    );
  }
  
  logout(){
    this.user = null;
    this.authUserService.logout();
  }

}
