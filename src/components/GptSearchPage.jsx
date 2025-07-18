import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchPage = () => {

    const { movieNames, movieResults } = useSelector(store => store?.gptSearch);

    if(!movieNames) return null;

    return <div className=" p-4 m-4 bg-[rgba(0,0,0,0.6)] text-white  " >
        <div className=" opacity-100 " >
            {
                movieNames.map((movie, index) => <MovieList key={movie} title={movie} movies={movieResults[index]} />)
            }
        </div>
    </div>
}


export default GptSearchPage;