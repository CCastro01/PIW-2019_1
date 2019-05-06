import { UserService } from './../../services/user.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:User[];

  constructor(private userService:UserService,
              private router:Router) { 
    this.users = [];
  }

  ngOnInit() {
    this.list();
  }

  list(){
    this.userService.list().subscribe(
      (res:User[])=>{
        this.users = res;
      }
    );
  }

  delete(id:number){
    this.userService.delete(id).subscribe(
      (res:any)=>{
        console.log(`User id ${id} deleted!`);
        this.list();
      },
      (err:any)=>{
        console.log("ERROR",err);
      }
    );
  }

  edit(id:number){
    this.router.navigate(['users/edit',id])
  }

}
