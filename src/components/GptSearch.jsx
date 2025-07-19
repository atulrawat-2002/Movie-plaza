import { BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar"
import GptSearchPage from "./GptSearchPage"

const GptSearch = () => {
    return <>
     <div className='fixed -z-10 ' >
            <img className='h-screen md:h-full object-cover opacity-90 ' src={BG_IMG} alt='image' />
        </div>
        <div className="  " >
        <GptSearchBar />
        <GptSearchPage />
        </div>
    </>
}

export default GptSearch;