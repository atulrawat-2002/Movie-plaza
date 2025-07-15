import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { toggleGptSearch } from "../utils/GptSearchSlice";
import { togglePopUp } from "../utils/popUpSlice";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showGpt = useSelector(store => store?.gptSearch?.showGptSearch);
    const showPopUp = useSelector(store => store?.popUp?.showPopUp);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const displayName = user.displayName;
                const email = user.email;
                const photoURL = USER_AVATAR;
                const uid = user.uid;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate('/browse')
            } else {
                dispatch(removeUser());
                navigate('/')
            }
        });
    }, [])

    const handleGptSearch = () => {
        if (showPopUp) {
            dispatch(togglePopUp());
            return;
        }
        dispatch(toggleGptSearch());    
    }

    const handleLogOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate('/');
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    const user = useSelector(store => store.user);
    return <>
        <div className="z-10 w-full absolute bg-gradient-to-b from-black flex justify-between " >
            <img className="w-39 md:w-44 " src={LOGO} alt="logo" />
            {
                user && <div className=" flex items-center justify-center" >
                    <img className=" h-12 md:h-10 rounded-lg " src={user.photoURL} alt="userLogo" />
                    <button onClick={handleGptSearch} className="bg-purple-900 p-1 py-3 md:p-2 my-1 mx-1 md:mx-2 rounded-sm cursor-pointer font-semibold" style={{backgroundColor: "oklch(0.48 0.27 285.01)"}} > {showGpt ? "Home" : (showPopUp ? "Home" : "GPT Search")} </button>
                    <button onClick={handleLogOut} className=" bg-red-600 p-1 py-3 md:p-2 m-1 rounded-sm cursor-pointer font-semibold " > Log Out</button>
                </div>
            }
        </div>
    </>
}


export default Header;