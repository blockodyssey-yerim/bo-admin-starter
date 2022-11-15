import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';

import {
    loginSlice as loginReducer,
    menuSlice as menuReducer,
    modalSlice as modalReducer,
    searchSlice as searchReducer
} from 'slices';

const appReducer = combineReducers({
    login: loginReducer,
    menu: menuReducer,
    modal: modalReducer,
    search: searchReducer
});

type RootState = ReturnType<typeof appReducer>;

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    // 로그아웃할 때 모든 state 초기화하기
    if (action.type === 'login/setLogOut') {
        state = {} as RootState;
    }

    return appReducer(state, action);
};

export default rootReducer;
