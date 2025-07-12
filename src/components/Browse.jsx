import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
    const showGptSearch = useSelector(store => store?.gptSearch?.showGptSearch);
    useNowPlayingMovies();

    return <>
        <Header />
        {
            showGptSearch ? <GptSearch /> : <>
                <MainContainer />
                <SecondaryContainer />
            </>
        }

    </>
}


export default Browse;