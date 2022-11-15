import { createSlice } from '@reduxjs/toolkit';

type LoginType = {
    isLogin: boolean;
    adminType: 'private' | 'public';
    accessToken: string;
};

const initialState: LoginType = {
    isLogin: true,
    adminType: 'private',
    accessToken: ''
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogIn: (state, { payload }) => {
            state.isLogin = true;
            state.accessToken = payload.accessToken;
        },
        setLogOut: (state) => {
            state.isLogin = false;
            localStorage.clear();
        }
    },
    extraReducers: {}
});

export const { setLogIn, setLogOut } = loginSlice.actions;

export const loginSelector = (state: { login: LoginType }) => state.login;

export default loginSlice.reducer;
