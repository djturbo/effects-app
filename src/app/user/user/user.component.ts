import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as actions from '../../store/actions';
import { User } from 'src/app/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  TAG = 'UserComponent :: ';
  loading: boolean;
  user: User;
  errorOnLoad: any;
  constructor(private _router: ActivatedRoute,
              private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.select('user').subscribe(
      resp => {
        this.user = resp.user;
        this.loading = resp.loading;
        this.errorOnLoad = resp.error;
        console.log(this.TAG, 'ngOnInit() STORE: ', resp);
      }
    );
    this._router.params.subscribe(
      params => {
        const id = params['id'];
        const action = new actions.SINGLE_USER_ACTION.LoadUser(id);
        this._store.dispatch(action);
      }
    );
  }

}
