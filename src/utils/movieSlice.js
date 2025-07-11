import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        topRatedMovies: null,
        movieTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addpopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        }
    }
})



export default movieSlice.reducer;
export const { addNowPlayingMovies, addTopRatedMovies, addUpcomingMovies, addpopularMovies, addMovieTrailer } = movieSlice.actions;