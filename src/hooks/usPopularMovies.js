import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const usePopularMovies=()=>{
    const dispatch=useDispatch();

    const popularMovies=useSelector(store=>store.movie.popularMovies)


    const getPopularMovies = async ()=>{

    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);

    const json = await data.json();
    
    dispatch(addPopularMovies(json.results));
  };

  useEffect (()=>{
    !popularMovies && getPopularMovies();
  },[]);
};

export default usePopularMovies;
