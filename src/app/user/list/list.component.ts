import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: User[];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.findAll().subscribe(
      userList => {
        this.users = [];
        userList.map( user => {
          this.users.push( new User(
            user.id,
            user.first_name,
            user.last_name,
            user.avatar));
      });
      console.log('users: ', this.users);
    });
  }

}
