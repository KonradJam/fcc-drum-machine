import { createSlice } from "@reduxjs/toolkit";

const powerSlice = createSlice({
    name: 'powerButton',
    initialState: {on: false},
    reducers: {
        switchOnOff(state) {
            state.on = !state.on
        }
    }
})

export const { switchOnOff } = powerSlice.actions
export default powerSlice.reducer