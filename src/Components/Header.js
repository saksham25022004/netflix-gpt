import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView, toggleGptSearchView2 } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { toggleShowTime2 } from "../utils/movieSlice";

const Header=()=>{

    const navigate=useNavigate();

    const user=useSelector(Store=>Store.user);

    const dispatch=useDispatch();

    const showGptSearch= useSelector((store)=>store.gpt.showGptSearch)

    const handleSignOut=()=>{
        signOut(auth).then(() => {})
        .catch((error) => {
            navigate("/error");
          });
    };

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                navigate("/browse");
            } 
            else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return ()=> unsubscribe();
    },[]);

    const handleGptSearchClick=()=>{
        dispatch(toggleGptSearchView());
        dispatch(toggleShowTime2());
    };

    const handleGptSearchClick2=()=>{
        dispatch(toggleGptSearchView2());
        dispatch(toggleShowTime2());
    };

    const handleLanguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value));
    };

    return (
        <div className="fixed w-[100%] px-8 bg-gradient-to-b from-black z-20 flex flex-col md:flex-row md:justify-between">
            <div className="flex justify-between">
                <img 
                    className="w-40 mx-auto md:mx-0"
                    src={LOGO}
                    alt="logo"
                />
                {user &&<button 
                        className="pl-6 text-white rounded-lg"
                        onClick={handleGptSearchClick2}    
                    >
                        Home
                    </button>
                }
            </div>
            {user && <div className="flex p-2  justify-center">
                {showGptSearch && <select 
                    className=" m-2 mr-4 bg-red-700 text-white rounded-sm"
                    onChange={handleLanguageChange}
                >
                    {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                </select>}
                <button 
                    className=" m-2 mx-4 text-white rounded-lg"
                    onClick={handleGptSearchClick}    
                >
                    {showGptSearch ? "Search" :"GPTSearch"}
                </button>
                <button 
                    onClick={handleSignOut}
                    className=" text-white m-2 mx-4">
                        Sign out
                </button>
                <img 
                    className="size-10 m-2 rounded-lg"
                    alt="usericon"
                    src={user?.photoURL}
                />
                
            </div>}
        </div> 
    );
};

export default Header;