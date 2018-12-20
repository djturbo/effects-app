import { User } from '../../models';
import * as actions from '../actions';

export namespace USER_REDUCER {

    export interface UsersState {
        users: User[];
        loaded: boolean;
        loading: boolean;
        error: any;
    }

    const initState: UsersState = {
        users: [],
        loaded: false,
        loading: false,
        error: null
    };

    export function UsersReducer( state = initState,  action: actions.USER_ACTION.usersActions ): UsersState {

        switch (action.type) {
            case actions.USER_ACTION.LOAD_USERS:
                state = {
                    ...state,
                    loading: true
                };
            break;
            case actions.USER_ACTION.LOAD_USERS_SUCCESS:
                state = {
                    ...state,
                    loading: false,
                    loaded: true,
                    error: null,
                    users: [ ...action.users ]
                };
            break;
            case actions.USER_ACTION.LOAD_USERS_FAIL:
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
