import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user:User;

  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit(){
   console.log(JSON.stringify(this.user)); 
  }

}
