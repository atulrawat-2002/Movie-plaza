import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from './movieSlice';
import gptSearchReducer from './GptSearchSlice'; 

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gptSearch: gptSearchReducer,
    }
})

export default appStore;