import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            <img className=" w-44 " src={LOGO} alt="logo" />
            {
                user && <div className=" flex items-center justify-center" >
                    <img className=" h-12 rounded-lg " src={user.photoURL} alt="userLogo" />
                    <button onClick={handleLogOut} className=" bg-red-600 p-1 m-1 rounded-sm cursor-pointer font-semibold " > Log Out</button>
                </div>
            }
        </div>
    </>
}


export default Header;