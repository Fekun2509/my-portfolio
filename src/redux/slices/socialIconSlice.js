import { createSlice } from '@reduxjs/toolkit'

export const socialIconPositionSlice = createSlice({
    name: 'IconPosition',
    initialState: {
        value: "bottom"
    },

    reducers: {
        updatePosition: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const { updatePosition } = socialIconPositionSlice.actions;

export default socialIconPositionSlice.reducer
