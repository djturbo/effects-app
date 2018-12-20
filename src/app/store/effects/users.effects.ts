import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as actions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';


@Injectable()
export class UsersEffects {
    constructor(
        private _actions$: Actions,
        public userService: UserService
    ) {}

    @Effect()
    loadUsers$ = this._actions$.ofType(actions.USER_ACTION.LOAD_USERS)
        .pipe(
            switchMap(() => {
                return this.userService.findAll()
                        .pipe(
                            map((users) => new actions.USER_ACTION.LoadUsersSuccess(users)
                            ),
                            catchError( error => of (new actions.USER_ACTION.LoadUsersFail(error)) )
                        );
            }));
}
