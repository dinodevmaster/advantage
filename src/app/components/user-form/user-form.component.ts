import { Component } from '@angular/core';
import { Users } from 'src/app/interfaces/User';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  constructor(private readonly usersService:UsersService,
    private readonly router:Router){}

  user: Users = {
    fullName: '',
    birthdate: '',
    email: '',
    telephone: '',
    sign: ''
  };

  submitUser(){
    this.usersService.createUser(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }
}
