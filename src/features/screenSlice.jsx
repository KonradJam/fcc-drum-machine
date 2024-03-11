import { createSlice } from "@reduxjs/toolkit";

const screenSlice = createSlice({
    name: 'screen',
    initialState: {title: 'Drum Machine'},
    reducers: {
        changeTitle(state, action) {
            state.title = action.payload;
        }
    }
})

export const { changeTitle } = screenSlice.actions
export default screenSlice.reducer