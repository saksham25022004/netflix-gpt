import { useSelector } from 'react-redux';
import usePopularMovies from '../hooks/usPopularMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTrendingMovies from '../hooks/useTrendingMovies.js';
import useTvShows from '../hooks/useTvShows.js';
import useTopTvShow from '../hooks/useTopTvShow.js';
import usePopularShow from '../hooks/usePopularShow .js';
import Show from './Show.js';
//import { Outlet } from 'react-router-dom';

const Browse = () => {

  const showGptSearch =useSelector(store=>store.gpt.showGptSearch);

  const showTime=useSelector(store=>store.movie.showTime);

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useTvShows();
  useTopTvShow();
  usePopularShow();

  return (
    <div>
      <Header />
      {/*
        showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      */}
      {showGptSearch && <GptSearch />}
      {showTime && <Show />}
      {!showGptSearch && !showTime && (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      
    </div>
  )
}

export default Browse;