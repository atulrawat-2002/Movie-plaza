import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";
import { addPopUpMovie, togglePopUp } from "../utils/popUpSlice";
import { toggleGptSearch } from "../utils/GptSearchSlice";
import { removeMovieTrailer } from "../utils/movieSlice";

const MovieCard = ({movieData}) => {
    const showGptSearch = useSelector(store => store?.gptSearch?.showGptSearch);
    const dispatch = useDispatch();
    

    const handlePopUp = () => {
        dispatch(togglePopUp());
        dispatch(removeMovieTrailer());
        showGptSearch && dispatch(toggleGptSearch());
        dispatch(addPopUpMovie(movieData));
    }

    return <>
        <div onClick={handlePopUp} className=" pr-4 cursor-pointer hover:scale-120 duration-500" >
           { movieData.poster_path && <img className="" src={`${IMG_CDN}/${movieData.poster_path}`} alt="Image" />}
        </div>
    </>
}


export default MovieCard;

