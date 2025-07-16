const TrailerShimmer = () => {
    return <>
        <div className=" w-[90%] h-[650px] mx-auto rounded-sm shimmer bg-gradient-to-b from-gray-300" >
            <div className=" pl-10 pt-48 " >
                <div className="h-12 w-36 bg-gray-400 rounded-md " ></div>
                <div className="my-8" >
                    <p className=" w-60 h-7 bg-gray-400 my-2 rounded-md " ></p>
                    <p className=" w-44 h-7 bg-gray-400 my-2 rounded-md " ></p>
                    <p className=" w-48 h-7 bg-gray-400 my-2 rounded-md " ></p>
                </div>
            </div>
        </div>
    </>
}


export default TrailerShimmer;