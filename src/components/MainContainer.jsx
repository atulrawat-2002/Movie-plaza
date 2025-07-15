import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = ({props}) => {
    let movies = null
    if (!props) {
        movies = useSelector(store => store?.movies?.nowPlayingMovies);
    } else{
        movies = props;
    }
    if (movies === null) return;
    const mainMovie = movies[0] || movies;
    const { original_title, overview, id } = mainMovie;

    return <div className=" pt-[25%] bg-black md:pt-0 " >
        <VideoTitle original_title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
}




export default MainContainer;