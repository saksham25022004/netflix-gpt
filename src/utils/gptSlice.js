import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieResults:null,
        movieNames:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=true;
        },
        toggleGptSearchView2:(state)=>{
            state.showGptSearch=false;
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames, movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
            //state.movieNames = [...state.movieNames, movieNames];
            //state.movieResults = [...state.movieResults, ...movieResults];
        },
    },
});
export const{toggleGptSearchView, toggleGptSearchView2, addGptMovieResult}=gptSlice.actions;
export default gptSlice.reducer;