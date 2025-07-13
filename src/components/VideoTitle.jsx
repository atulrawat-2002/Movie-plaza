import { useDispatch, useSelector } from "react-redux";
import { toggleAutoPlay, toggleMute } from "../utils/movieSlice";

const VideoTitle = ({ original_title, overview }) => {
    const dispatch = useDispatch();
    const { autoPlay, mute} = useSelector(store => store?.movies);

    return <>
        <div className=" mt-[42%] md:m-0 w-full aspect-video pt-[14%] px-12 absolute text-white bg-gradient-to-r from-black" >
            <h1 className=" text-2xl font-bold " > {original_title} </h1>
            <p className="  md:py-6 text-md font-semibold md:w-1/4" > {overview} </p>
            <div>
                <button onClick={() => dispatch(toggleAutoPlay())} className="bg-white text-black font-semibold p-1 px-8 text-lg opacity-90 rounded-sm cursor-pointer hover:opacity-80 " >{autoPlay ? "⏸️ Pause " : "▶️ Play"}</button>
                <button onClick={() => dispatch(toggleMute())} className="mx-2 bg-gray-700 text-white py-1.5 px-8 text-lg opacity-90 rounded-sm cursor-pointer" >{mute ? "🔊 Unmute" : "🔇 Mute"}</button>
            </div>
        </div>
    </>
}


export default VideoTitle;