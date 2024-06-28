import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

  const movies=useSelector(store=>store.movie);

    return (
        <div className="bg-black">
            <div className="mt-0 md:-mt-52 pl-1 md:pl-12 relative z-20">
              <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
              <MovieList title={"Trending"} movies={movies.trendingMovies}/>
              <MovieList title={"Popular"} movies={movies.popularMovies}/>
              <MovieList title={"TV Shows"} movies={movies.tvShows}/>
              <MovieList title={"Top Rated TV Shows"} movies={movies.topTvShow}/>
              <MovieList title={"Popular Shows"} movies={movies.popularShow}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;