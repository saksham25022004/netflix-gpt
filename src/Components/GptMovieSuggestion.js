import { useSelector } from "react-redux";
import GptMovieList from "./GptMovieList";

const GptMovieSuggestion = () => {

    const {movieNames, movieResults}=useSelector(store=>store.gpt);

    if(!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black bg-opacity-70 text-white ">

        {/*<div>
            {movieNames.map((movieName,index)=>
                <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
            )}
        </div>*/}

        <div>
          <GptMovieList title={movieNames} movies={movieResults} />
        </div>
        
    </div>
  );
};

export default GptMovieSuggestion;