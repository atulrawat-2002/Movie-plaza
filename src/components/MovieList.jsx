import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

    if (!movies) return;

    return <>
        <div className="px-2 " >
            <h1 className="font-semibold text-white py-2 text-2xl" >{title}</h1>
            <div className="flex overflow-x-scroll " >
                
                <div className="flex shrink-0 overflow-hidden m run dev
                 " >
                    {
                        movies.map(movie => {
                            return <MovieCard key={movie.id} movieData={movie} />
                        })
                    }
                </div>
            </div>
        </div>
    </>
}


export default MovieList;



