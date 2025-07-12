import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const data = useSelector(store => store?.movies);
    const { nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies } = data;

    return <>
        <div className=" px-12 bg-black" >
            <div className="-mt-40 relative z-10" >
            <MovieList title={"Now Playing"} movies={nowPlayingMovies} /> 

            </div>
            <MovieList title={"Upcoming"} movies={upcomingMovies} />
            <MovieList title={"Top Rated"} movies={topRatedMovies} />
            <MovieList title={"Popular"} movies={popularMovies} />
        </div>
    </>
}


export default SecondaryContainer;