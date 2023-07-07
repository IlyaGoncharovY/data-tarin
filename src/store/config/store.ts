import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import trainsReducer from "../slices/TrainSlice"

export const store = configureStore({
    reducer: {
        trains: trainsReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;