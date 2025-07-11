import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector(store => store?.movies?.nowPlayingMovies);
    if(movies === null) return;
    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    return <>
        <VideoTitle original_title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </>
}




export default MainContainer;