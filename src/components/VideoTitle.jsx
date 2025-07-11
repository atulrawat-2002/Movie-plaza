const VideoTitle = ({ original_title, overview }) => {
    return <>
        <div className="pt-36 px-12 " >
            <h1 className=" text-2xl font-bold " > {original_title} </h1>
            <p className=" py-6 text-md font-semibold w-1/4" > {overview} </p>
            <div>
                <button className="bg-gray-500 text-white p-2 px-10 text-lg opacity-90 rounded-sm cursor-pointer" > ▶️ Play</button>
                <button className="mx-2 bg-gray-500 text-white p-2 px-10 text-lg opacity-90 rounded-sm cursor-pointer" >More Info</button>
            </div>
        </div>
    </>
}


export default VideoTitle;