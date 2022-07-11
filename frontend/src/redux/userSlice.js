import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({
    name: "user",
    initialState: {
        users: {
            allUsers: null,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        getUsersStart: (state) => {
            state.login.isFetching = true;
        },
        getUsersSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.allUsers = action.payload;
        },
        getUsersFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
    }
});

export const {
    getUsersStart,
    getUsersSuccess,
    getUsersFailed
} = userSlice.actions;

export default userSlice.reducer;