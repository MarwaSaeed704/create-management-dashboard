import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthSate {
    isAuthenticated: boolean,
    user: string | null,
    
};

const initialState: AuthSate = {
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
    user: localStorage.getItem('user') || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = true;
            state.user = action.payload;

            // save data in local storage
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("user", action.payload);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;

            // remove data from local storage
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('user');
        },
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
