import { User } from './models/user.model';
import { Component, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{

  loggedUser:User = null;

  constructor(){
    this.loggedUser = JSON.parse(sessionStorage.getItem("logged_user"));
    console.log(JSON.stringify(this.loggedUser));
  }
  
  ngOnChanges(){
    console.log("test");
  }
}
