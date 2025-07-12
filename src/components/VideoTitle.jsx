const VideoTitle = ({ original_title, overview }) => {
    return <>
        <div className="w-full aspect-video pt-[14%] px-12 absolute text-white bg-gradient-to-r from-black" >
            <h1 className=" text-2xl font-bold " > {original_title} </h1>
            <p className=" py-6 text-md font-semibold w-1/4" > {overview} </p>
            <div>
                <button className="bg-white text-black font-semibold p-1 px-8 text-lg opacity-90 rounded-sm cursor-pointer hover:opacity-80 " > ▶️ Play</button>
                <button className="mx-2 bg-gray-500 text-white p-1 px-8 text-lg opacity-90 rounded-sm cursor-pointer" >More Info</button>
            </div>
        </div>
    </>
}


export default VideoTitle;