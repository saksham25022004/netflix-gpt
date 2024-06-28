import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { addTopTvShows } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopTvShow=()=>{

    const dispatch=useDispatch();

    const topTvShows=useSelector(store=>store.movie.tvShows);

    const getTopTvShows=async ()=>{

        const data=await fetch('https://api.themoviedb.org/3/tv/top_rated?page=1', API_OPTIONS);

        const json=await data.json();

        dispatch(addTopTvShows(json.results));

    };

    useEffect(()=>{
        !topTvShows && getTopTvShows();
    },[]);

};

export default useTopTvShow;