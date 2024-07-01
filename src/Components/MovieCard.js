import { useDispatch } from "react-redux";
import { ING_CDN_URL } from "../utils/constants"
import { addMovieId, toggleShowTime } from "../utils/movieSlice";
import { toggleGptSearchView2 } from "../utils/gptSlice";

const MovieCard = ({movieid,posterPath}) => {

  const dispatch=useDispatch();

  const handleCardClick = () => {
    dispatch(toggleShowTime());
    dispatch(toggleGptSearchView2());
    dispatch(addMovieId(movieid));
  };

  if(!posterPath) return null;
  return (
    <div 
      onClick={handleCardClick}
      className="pr-2 m-2 w-36 cursor-pointer hover:scale-125 duration-300 ">
        <img 
            className="rounded-md "
            alt="Movie Card"
            src={ING_CDN_URL+posterPath}
        /> 
    </div>
  );
};

export default MovieCard;