import { useRef, useState } from "react";
import groq from "../utils/Groq";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addResultedMovies, addSearchSuggestions } from "../utils/GptSearchSlice";

const GptSearchBar = () => {
    const [showSuggestions, setShowSuggestions] = useState(true)
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const suggestionData = useSelector(store => store?.gptSearch?.searchSuggestions);
  
    
    const getSearchSuggestions = async (e) => {
        if(e.code === 'Space'){
            // When the space bar is hit it enables the suggestions to be shown
            setShowSuggestions(true)
        }
        const newKey = searchText?.current?.value.trim();
        if(newKey === ""){
            // If the search bar is empty it disables the suggestions from being shown
            setShowSuggestions(false)  
            return;
        }
        const searchSuggestionsQuery = `I want you to give me suggestions based on this query: "${searchText?.current?.value}" and output should be like if the query is "romantic" response should be only the suggestions and nothing else in the message : "romantice hollywood movie", "romantic hindi movie", "best romantic drama movie", "romantic emotional movie", "feel good romantic movie". All should be related to movie, not songs, not video nothing else and give only 5 suggestions. `;
        if (e.code === 'Space' && !(newKey in suggestionData) ) {
            // if the space bar is pressed and there is no suggestions present already for the current term then only API call will be made
            const getSuggestionsData = await groq.chat.completions.create({
                messages: [
                    {
                        role: "user",
                        content: searchSuggestionsQuery,
                    },
                ],
                model: "llama-3.3-70b-versatile",
            }); 
                dispatch(addSearchSuggestions({
                    [newKey]: getSuggestionsData?.choices[0]?.message?.content.split(",")
                }))
        }
    }

    const handleGptSearch = async () => {
        if (!searchText.current.value) return;
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

        const promiseArray = movieNames.map(movie => getSearchedMovies(movie));

        const resultedMovies = await Promise.all(promiseArray);

        dispatch(addResultedMovies({ movieNames: movieNames, movieResults: resultedMovies }));


    }

    const getSearchedMovies = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`, API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    return <>
        <div className="  pt-[35%] md:pt-[8%] flex justify-center " >
            <form onSubmit={e => e.preventDefault()} className=" w-full md:w-1/2 bg-black grid grid-cols-12 opacity-95 ">
                <input ref={searchText} onFocus={() => {setShowSuggestions(true); }} onBlur={() => setShowSuggestions(false)}  onKeyDown={(e) => {getSearchSuggestions(e)}} className=" py-2 px-4 m-4 bg-white col-span-9 font-semibold  " type="text" placeholder="Ex query: movies for developers" />
                <button onClick={handleGptSearch} className="m-4 py-2 px-2 md:px-4 bg-red-600 text-black font-semibold rounded-sm col-span-3 cursor-pointer" >Search</button>
            </form>
        </div>
       { showSuggestions && <div className=" w-full md:w-1/2 bg-white opacity-90  text-white mx-auto shadow-2xl " >
            <ul className=" bg-gray-800 mx-auto py-0.5 " >
                {
                    suggestionData[searchText?.current?.value.trim()] && suggestionData[searchText?.current?.value.trim()].map((value, index) => <li key={index} onMouseDown={() => {
                        if(searchText.current) searchText.current.value = value.replace(/"/g, "");
                        setShowSuggestions(false);
                        handleGptSearch();

                    }} className="bg-gray-950 hover:shadow-sm font-semibold break-words break-all my-1 mx-0 rounded-lg p-2 hover:bg-gray-900 hover:shadow-blue-600 cursor-pointer " >🔍 {value.replace(/"/g, "")} </li>)
                }
            </ul>
        </div>}
    </>
}



export default GptSearchBar;