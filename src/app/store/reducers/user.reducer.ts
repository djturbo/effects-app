import { User } from '../../models';
import * as actions from '../actions';

export namespace SINGLE_USER_REDUCER {

    export interface UserState {
        user: User;
        loaded: boolean;
        loading: boolean;
        error: any;
    }

    const initState: UserState = {
        user: null ,
        loaded: false,
        loading: false,
        error: null
    };

    export function UsersReducer( state = initState,  action: actions.SINGLE_USER_ACTION.userActions ): UserState {

        switch (action.type) {
            case actions.SINGLE_USER_ACTION.ActionType.LOAD_USER:
                state = {
                    ...state,
                    loading: true
                };
            break;
            case actions.SINGLE_USER_ACTION.ActionType.LOAD_USER_SUCCESS:
                state = {
                    ...state,
                    loading: false,
                    loaded: true,
                    error: null,
                    user: { ...action.user }
                };
            break;
            case actions.SINGLE_USER_ACTION.ActionType.LOAD_USER_FAIL:
                state = {
                    ...state,
                    loading: false,
                    loaded: false,
                    error: {
                      message:  action.payload.message,
                      status: action.payload.status,
                      url: action.payload.url
                    }
                };
            break;
        }

        return state;
    }
}
