import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailer = useSelector(store => store?.movies?.movieTrailer);
    if(!trailer) return;

    return <>
        <div>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/lyivgZ074PY?si=${trailer.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </>
}


export default VideoBackground;