import { IMG_CDN } from "../utils/constants";

const MovieCard = ({movieData}) => {
    return <>
        <div className=" pr-4 cursor-pointer hover:scale-120 duration-500" >
           { movieData.poster_path && <img className="" src={`${IMG_CDN}/${movieData.poster_path}`} alt="Image" />}
        </div>
    </>
}


export default MovieCard;

