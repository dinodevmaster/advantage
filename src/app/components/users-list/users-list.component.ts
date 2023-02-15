import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Users } from '../../interfaces/User';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  users: Users[] = [];

  constructor(private readonly usersService:UsersService){}

  ngOnInit(){
    this.getUsers();
  }

  async getUsers(){
    this.usersService.getUsers()
    .subscribe(res => {
      console.log(typeof(res));
        this.users = res
    })
  }
}
