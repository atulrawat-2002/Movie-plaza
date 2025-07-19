import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name: 'GptSearch',
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
        searchSuggestions: {},
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addResultedMovies: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        addSearchSuggestions: (state, action) => {
            state.searchSuggestions = { ...state.searchSuggestions, ...action.payload }
        }
    }
})


export const { toggleGptSearch, addResultedMovies, addSearchSuggestions } = GptSearchSlice.actions;
export default GptSearchSlice.reducer;
