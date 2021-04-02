import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isLogin: false,
    nickName: null,
    nickColor: null
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.isLogin = true;
            state.nickName = payload.nickName;
            state.nickColor = payload.nickColor;
        },
        logout: state => {
            state.isLogin = false;
            state.nickName = null;
            state.nickColor = null;
        }
    }
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;