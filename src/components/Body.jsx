import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
    
    const dispatch = useDispatch();
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         console.log(user)
    //         if (user) {
    //             // User is signed in, see docs for a list of available properties
    //             // https://firebase.google.com/docs/reference/js/auth.user
    //             const { uid, email, displayName, photoURL } = user;
    //             dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
    //             // ...
    //         } else {
    //             dispatch(removeUser());
    //             // User is signed out
    //             // ...
    //         }
    //     });
    // }, [])

    return <>
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/browse" element={<Browse />} />
            </Routes>
        </BrowserRouter>
    </>
}


export default Body;