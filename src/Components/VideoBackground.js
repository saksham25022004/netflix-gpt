import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {

    const trailerVideo=useSelector(store=>store.movie?.trailerVideo);

    useMovieTrailer(movieId);

    return (
        <div className="">
            <iframe
                className="w-full h-full aspect-video no-scrollbar"
                
                src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&modestbranding=1&playsinline=1&rel=0"} 
                title="YouTube video player"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                referrerPolicy="strict-origin-when-cross-origin" 
                >

            </iframe>
        </div>
    );
};

export default VideoBackground;