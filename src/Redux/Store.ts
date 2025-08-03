import { configureStore } from "@reduxjs/toolkit";
import courseSlice from './features/coursesSlice';
import authSlice from "./features/authSlice";

export const store = configureStore({
    reducer: {
        courses: courseSlice,
        auth:authSlice,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

