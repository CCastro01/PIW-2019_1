import { UserService } from './../../services/user.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user:User;

  constructor(private userService:UserService) {
    this.user = new User();
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(JSON.stringify(this.user));
    if(this.user!=null) this.add();
  }

  add(){
    this.userService.add(this.user).subscribe(
      (res:User)=>{
        console.log(`User id:${res.id} added!`);
      }
    );
  }

}
