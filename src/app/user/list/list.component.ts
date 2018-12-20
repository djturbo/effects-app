import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions';
import { AppState } from '../../store/app.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: User[];
  loading: boolean;
  errorOnLoad: any;

  constructor(
    private _userService: UserService,
    private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.select('users').subscribe(
      state => {
      this.users = state.users;
      this.loading = state.loading;
      this.errorOnLoad = state.error;
    });
      const action = new actions.USER_ACTION.LoadUsers();
      this._store.dispatch(action);
      console.log('users: ', this.users);
    // });
  }

}
