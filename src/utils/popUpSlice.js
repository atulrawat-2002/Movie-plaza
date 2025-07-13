import { createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
    name: 'popUp',
    initialState: {
        showPopUp: false,
        popUpMovie: null,
    },
    reducers: {
        togglePopUp: (state) => {
            state.showPopUp = !state.showPopUp;
        },
        addPopUpMovie: (state, action) => {
            state.popUpMovie = action.payload;
        }
    }
})


export const { togglePopUp, addPopUpMovie } = popUpSlice.actions;
export default popUpSlice.reducer;