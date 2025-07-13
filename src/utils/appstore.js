import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from './movieSlice';
import gptSearchReducer from './GptSearchSlice'; 
import popUpReducer from './popUpSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gptSearch: gptSearchReducer,
        popUp: popUpReducer,
    }
})

export default appStore;