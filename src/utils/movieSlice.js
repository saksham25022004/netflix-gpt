import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        trendingMovies:null,
        tvShows:null,
        topTvShow:null,
        popularShow:null,
        showTime:false,
        movieId:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTrailerVideo:(state, action)=>{
            state.trailerVideo=action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload;
        },
        addTvShows:(state,action)=>{
            state.tvShows=action.payload;
        },
        addTopTvShows:(state,action)=>{
            state.topTvShow=action.payload;
        },
        addPopularShows:(state,action)=>{
            state.popularShow=action.payload;
        },
        toggleShowTime:(state)=>{
            state.showTime=true;
        },
        toggleShowTime2:(state)=>{
            state.showTime=false;
        },
        addMovieId:(state,action)=>{
            state.movieId=action.payload;
        },
    }
});
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTrendingMovies, addTvShows, addTopTvShows, addPopularShows, toggleShowTime, toggleShowTime2, addMovieId}=movieSlice.actions;
export default movieSlice.reducer;