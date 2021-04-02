import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isOpen: false,
    msg: [],
    activeUser: []
};

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        open: state => {
            state.isOpen = true;
        },
        activeUser: (state, { payload }) => {
            state.activeUser = payload.slice();
        },
        allMsg: (state, { payload }) => {
            state.msg = payload.slice();
        },
        close: state => {
            state.isOpen = false;
            state.msg = [];
            state.activeUser = [];
        }
    }
});

export const { open, activeUser, allMsg, close } = messageSlice.actions;

export default messageSlice.reducer;
