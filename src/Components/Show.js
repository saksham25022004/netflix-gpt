import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const Show = () => {

  const movieId=useSelector(store=>store.movie.movieId);

  const [trailer, setTrailer] = useState();

  useEffect(()=>{

    const getMovieVideo=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
  
      const json= await data.json();
  
      const filterData=json.results.filter(video=>video.type==="Trailer");
  
      const trailer=filterData.length ? filterData[0] : json.results[0];

      setTrailer(trailer);
  
    };

    if (movieId) {
      getMovieVideo();
    }

  },[movieId]);
  
  if(!trailer) return null;

  return (
    <div className="">
            <iframe
                className="bg-black w-screen h-screen"
                width="1080"
                height="560"
                src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1&controls=1&showinfo=0&autohide=1&modestbranding=0&playsinline=1&rel=0"} 
                title="YouTube video player"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                referrerPolicy="strict-origin-when-cross-origin" 
                >
            </iframe>
    </div>
  );
};

export default Show;