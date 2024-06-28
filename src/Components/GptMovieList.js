import MovieCard from "./MovieCard"

const GptMovieList = ({title, movies}) => {
  return (
    <div>
        <h1 className="text-lg md:text-2xl py-2 text-white">{title}</h1>
        <div className="flex">

            <div className="flex flex-wrap">
                {movies?.map(movie=> <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
            </div>

        </div>

    </div>
  )
}

export default GptMovieList;