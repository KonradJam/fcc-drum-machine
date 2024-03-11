import { configureStore } from "@reduxjs/toolkit";
import powerReducer from "./features/powerSlice";
import screenReducer from "./features/screenSlice";
import volumeSlice from "./features/volumeSlice";

export const store = configureStore({
    reducer: {
        power: powerReducer,
        screen: screenReducer,
        volume: volumeSlice
    }
})