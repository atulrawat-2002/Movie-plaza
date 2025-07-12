const GptSearchBar = () => {
    return <>
        <div className="pt-[8%] flex justify-center " > 
            <form action="" className=" w-1/2 bg-black grid grid-cols-12 opacity-95 ">
                <input className=" py-2 px-4 m-4 bg-white col-span-9 font-semibold  " type="text" placeholder="What would you like to watch today?" />
                <button className="m-4 py-2 px-4 bg-red-600 text-black font-semibold rounded-sm col-span-3 " >Search</button>
            </form>
        </div>
    </>
}


export default GptSearchBar;