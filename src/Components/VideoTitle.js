const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[20%] px-6 md:px-16 absolute text-white">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden sm:hidden md:inline-block text-lg py-6 w-[40%]">{overview}</p>

        <div className="m-2 md:m-0">
            <button 
                className="bg-white text-black py-1 md:py-3 px-3 md:px-10 text-xl font-bold rounded-md hover:opacity-80">
                     ▷ Play
            </button>
            <button 
                className="hidden md:inline-block bg-gray-500 text-white py-3 px-12 text-xl bg-opacity-50 rounded-md mx-2">
                    ⓘ More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle