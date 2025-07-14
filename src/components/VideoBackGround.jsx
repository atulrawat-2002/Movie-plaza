import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const { movieTrailer, autoPlay, mute} = useSelector(store => store?.movies);

    if(!movieTrailer) return;

    return <>
        <div className=" " >
            <iframe className=" w-full aspect-video " src={`https://www.youtube.com/embed/${movieTrailer.key}?&autoplay=${autoPlay}&mute=${mute}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </>
}


export default VideoBackground;
