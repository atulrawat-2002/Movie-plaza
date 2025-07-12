import { BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar"
import GptSearchPage from "./GptSearchPage"

const GptSearch = () => {
    return <>
     <div className='absolute -z-10 ' >
            <img className=' opacity-90 ' src={BG_IMG} alt='image' />
        </div>
        <GptSearchBar />
        <GptSearchPage />
    </>
}

export default GptSearch;