import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { addPopularShows } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularShow=()=>{

    const dispatch=useDispatch();

    const popularShows=useSelector(store=>store.movie.popularShow);

    const getPopularShows=async ()=>{

        const data=await fetch('https://api.themoviedb.org/3/tv/63174/recommendations?language=en-US&page=1', API_OPTIONS);

        const json=await data.json();

        dispatch(addPopularShows(json.results));

    };

    useEffect(()=>{
        !popularShows && getPopularShows();
    },[]);

};

export default usePopularShow;