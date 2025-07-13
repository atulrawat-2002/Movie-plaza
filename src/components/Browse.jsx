import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import PopUp from "./PopUp";

const Browse = () => {
    const showGptSearch = useSelector(store => store?.gptSearch?.showGptSearch);
    const { showPopUp, popUpMovie} = useSelector(store => store?.popUp);

    useNowPlayingMovies();

    return <>
        <Header />

        {
            showGptSearch ? <GptSearch /> : ( showPopUp ? <PopUp popUpMovie={popUpMovie} /> :  <div className=" pb-[8%] md:pb-[5%] bg-black" >
                <MainContainer props={null} />
                <SecondaryContainer />
            </div>)
        }

    </>
}


export default Browse;