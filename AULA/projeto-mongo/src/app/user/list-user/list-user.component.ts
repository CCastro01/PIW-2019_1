import { AuthUserService } from './../../services/auth-user.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
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
              private router:Router,
              private authUserService: AuthUserService) { 
    this.users = [];
  }

  ngOnInit() {
    this.list();
  }

  list(){
    this.userService.list().subscribe(
      (res:User[])=>{
        this.users = res;
      },
      (error:any)=>{
        this.authUserService.logout();
      }
    );
  }

  delete(id:number){
    if(!confirm("Are you sure?")){
      return;
    } 
    
    this.userService.delete(id).subscribe(
      (res:any)=>{
        console.log(`User id ${id} deleted!`);
        this.list();
      },
      (error:any)=>{
        this.authUserService.logout();
      }
    );
  }

  edit(id:number){
    //nevegação imperativa
    this.router.navigate(['user/edit',id]);
  }

}
