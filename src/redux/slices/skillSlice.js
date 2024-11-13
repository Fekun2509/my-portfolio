import { createSlice } from '@reduxjs/toolkit'

export const skillTypeSlice = createSlice({
    name: 'skillType',
    initialState: {
        value: ""
    },
    reducers: {
        typeSelected: (state, action) => {
            state.value = action.payload;
        },

        update: state => {
            state.value = "";
            console.log("Updated!")
        }
    }
})

// Action creators are generated for each case reducer function
export const { typeSelected, update } = skillTypeSlice.actions

export default skillTypeSlice.reducer