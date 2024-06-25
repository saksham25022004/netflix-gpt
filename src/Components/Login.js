import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login=()=>{

    const [isSignInForm, setIsSignInForm]=useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    const navigate=useNavigate();

    const dispatch=useDispatch();

    const name= useRef(null);
    const email= useRef(null);
    const password=useRef(null);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonclick=()=>{
        const message=checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => { 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/125249846?v=4"
                      }).then(() => {
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                        navigate("/browse");
                      }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                }
            );
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                }
            );
        }
    };

    return <div>
        <Header />
        <div className="absolute">
            <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt="logo"
            />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="p-12 bg-black absolute w-3/12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80">
            <h1 
                className="font-bold font-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (<input 
                ref={name}
                type="text" 
                placeholder="Full Name" 
                className="p-4 my-4 w-full bg-gray-700" 
            />)}
            <input 
                ref={email}
                type="text" 
                placeholder="Email Address" 
                className="p-4 my-4 w-full bg-gray-700" 
            />
            <input 
                ref={password}
                type="password" 
                placeholder="Password" 
                className="p-4 my-4 w-full bg-gray-700" 
            />
            <p className="text-red-500 font-bold text-lg py-2">
                {errorMessage}
            </p>
            <button 
                className="p-4 my-6 bg-red-700 w-full rounded-lg"
                onClick={handleButtonclick}
            >
                    {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p 
                className="py-4 cursor-pointer"
                onClick={toggleSignInForm}
            >
                {isSignInForm ? "New to Netflix?Sign In Now" : "Already registered? Sign Up Now"}
            </p>
        </form>
    </div>;
};

export default Login;