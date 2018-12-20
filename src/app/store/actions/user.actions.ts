import { User } from './../../models/user.model';
import { Action } from '@ngrx/store';

export namespace SINGLE_USER_ACTION {


    export enum ActionType {
        LOAD_USER              = '[User] Load User',
        LOAD_USER_FAIL         = '[User] Load User Fail',
        LOAD_USER_SUCCESS      = '[User] Load User Success'
    }
    /***********************************************
     *                   SINGLE USER
    ************************************************/
   export class LoadUser implements Action {
    readonly type = ActionType.LOAD_USER;
    constructor(public id: number) { }
    }
    export class LoadUserFail implements Action {
        readonly type = ActionType.LOAD_USER_FAIL;

        constructor(public payload: any) { }
    }

    export class LoadUserSuccess implements Action {
        readonly type = ActionType.LOAD_USER_SUCCESS;

        constructor(public user: User) {}
    }

    export type userActions =
                               LoadUser |
                               LoadUserFail |
                               LoadUserSuccess;
}
