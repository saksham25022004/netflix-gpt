import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
            <img
                
                src={BG_URL}
                alt="logo"
            />
      </div>
      <div className="">
          <GptSearchBar />
          <GptMovieSuggestion />
      </div>
    </>
  )
};

export default GptSearch;