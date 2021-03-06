import { User } from './../../models/user.model';
import { Action } from '@ngrx/store';

export namespace USER_ACTION {

    export const LOAD_USERS      = '[Users] Load Users';
    export const LOAD_USERS_FAIL = '[Users] Load Users Fail';
    export const LOAD_USERS_SUCCESS      = '[Users] Load Users Success';

    export enum ActionType {
        LOAD_USER              = '[Users] Load Users',
        LOAD_USER_FAIL         = '[Users] Load Users Fail',
        LOAD_USER_SUCCESS      = '[Users] Load Users Success'
    }

    export class LoadUsers implements Action {
        readonly type = LOAD_USERS;
    }
    export class LoadUsersFail implements Action {
        readonly type = LOAD_USERS_FAIL;

        constructor(public payload: any) { }
    }

    export class LoadUsersSuccess implements Action {
        readonly type = LOAD_USERS_SUCCESS;

        constructor(public users: User[]) {}
    }

    export type usersActions = LoadUsers |
                               LoadUsersFail |
                               LoadUsersSuccess;
}
