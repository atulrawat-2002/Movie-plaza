import { IMG_CDN } from "../utils/constants";

const MovieCard = ({movieData}) => {
    return <>
        <div className=" pr-4 cursor-pointer hover:scale-150 duration-500 " >
           <img className="" src={`${IMG_CDN}/${movieData.poster_path}`} alt="Image" />
        </div>
    </>
}


export default MovieCard;

