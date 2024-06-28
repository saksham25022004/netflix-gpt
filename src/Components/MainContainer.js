import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies= useSelector(store=>store.movie?.trendingMovies);

    if(!movies) return;

    const mainMovie = movies[14];

    const {original_title, overview,id}=mainMovie;

  return (
    <div className="pt-[30%]  md:pt-0">
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
};

export default MainContainer;