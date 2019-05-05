import { UserService } from './../../services/user.service';
import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css']
})
export class InputUserComponent implements OnInit {

  user:User;

  constructor(private userService:UserService) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(JSON.stringify(this.user));
    this.userService.setUser(this.user);
  }

}
