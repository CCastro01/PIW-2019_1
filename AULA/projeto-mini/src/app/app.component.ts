import { User } from './models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  user:User = null;
  
  constructor(){
    
  }

  ngOnInit(): void {
    let userSessionStorage = sessionStorage.getItem("user_login");
    if(sessionStorage){
      this.user = JSON.parse(userSessionStorage);
    }
  }
  
  logout(){
    sessionStorage.removeItem("user_login");
    this.user = null;
  }

}
