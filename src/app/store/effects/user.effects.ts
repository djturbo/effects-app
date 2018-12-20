import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as actions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
    constructor(
        private _actions$: Actions,
        public userService: UserService
    ) {}

    @Effect()
    loadUser$ = this._actions$.ofType(actions.SINGLE_USER_ACTION.ActionType.LOAD_USER)
        .pipe(
            switchMap((action: actions.SINGLE_USER_ACTION.LoadUser) => {
                return this.userService.findById(action.id)
                        .pipe(
                            map((user) => new actions.SINGLE_USER_ACTION.LoadUserSuccess(user)
                            ),
                            catchError( error => of (new actions.SINGLE_USER_ACTION.LoadUserFail(error)) )
                        );
            }));
}
