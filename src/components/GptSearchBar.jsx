import { useRef } from "react";
import groq from "../utils/Groq";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addResultedMovies } from "../utils/GptSearchSlice";

const GptSearchBar = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();

    

    const handleGptSearch = async () => {
        if(!searchText.current.value) return;
        const searchQuery = `I want 5 movies recommendations base on this query: "${searchText.current.value}" and example response is: first movie name, second movie name, third movie name, fourth movie name, fifth movie name`;
        const gptSearchData = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: searchQuery,
                },
            ],
            model: "llama-3.3-70b-versatile",
        });

        const movieNames = gptSearchData.choices[0]?.message?.content.split(",");

        const promiseArray = movieNames.map( movie => getSearchedMovies(movie) );

        const resultedMovies = await Promise.all(promiseArray);

        dispatch(addResultedMovies({movieNames: movieNames, movieResults: resultedMovies}));
    }

    const getSearchedMovies = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    return <>
        <div className="  pt-[35%] md:pt-[8%] flex justify-center " >
            <form onSubmit={e => e.preventDefault()} className=" w-full md:w-1/2 bg-black grid grid-cols-12 opacity-95 ">
                <input ref={searchText} className=" py-2 px-4 m-4 bg-white col-span-9 font-semibold  " type="text" placeholder="What would you like to watch today?" />
                <button onClick={handleGptSearch} className="m-4 py-2 px-2 md:px-4 bg-red-600 text-black font-semibold rounded-sm col-span-3 cursor-pointer" >Search</button>
            </form>
        </div>
    </>
}


export default GptSearchBar;