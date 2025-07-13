import { createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
    name: 'popUp',
    initialState: {
        showPopUp: false,
        popUpMovie: null,
        showPassword: false,
    },
    reducers: {
        togglePopUp: (state) => {
            state.showPopUp = !state.showPopUp;
        },
        addPopUpMovie: (state, action) => {
            state.popUpMovie = action.payload;
        },
        toggleShowPassword: (state) => {
            state.showPassword = !state.showPassword;
        }
    }
})


export const { togglePopUp, addPopUpMovie, toggleShowPassword } = popUpSlice.actions;
export default popUpSlice.reducer;