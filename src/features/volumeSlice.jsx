import { createSlice } from "@reduxjs/toolkit";

const volumeSlice = createSlice({
    name: 'volume',
    initialState: {value: 50},
    reducers: {
        volumeChange(state, action) {
            state.value = action.payload;
        }
    }
})

export const { volumeChange } = volumeSlice.actions;
export default volumeSlice.reducer;