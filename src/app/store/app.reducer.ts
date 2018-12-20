import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
    users: reducers.USER_REDUCER.UsersState;
    user: reducers.SINGLE_USER_REDUCER.UserState;
}

export const APP_REDUCERS: ActionReducerMap<AppState> = {
    users: reducers.USER_REDUCER.UsersReducer,
    user: reducers.SINGLE_USER_REDUCER.UsersReducer
};
