import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
const dispatch = useDispatch();
const navigate = useNavigate();

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
            <img className=" w-44 " src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
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