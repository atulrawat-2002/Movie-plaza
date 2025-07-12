import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name: 'GptSearch',
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addResultedMovies: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})


export const { toggleGptSearch, addResultedMovies } = GptSearchSlice.actions;
export default GptSearchSlice.reducer;
