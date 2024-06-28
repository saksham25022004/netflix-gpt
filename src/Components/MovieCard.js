import { ING_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="pr-2 m-2 w-36 cursor-pointer hover:scale-125 duration-300 ">
        <img 
            className="rounded-md "
            alt="Movie Card"
            src={ING_CDN_URL+posterPath}
        /> 
    </div>
  );
};

export default MovieCard;