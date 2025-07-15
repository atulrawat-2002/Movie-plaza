import { useEffect, useRef, useState } from 'react';
import { validateData } from '../utils/validation';
import Header from './Header';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { BG_IMG, USER_AVATAR } from '../utils/constants';
import { toggleShowPassword } from '../utils/popUpSlice';

const Login = () => {
    const [signup, setSignUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null)
    const password = useRef(null)
    const fullName = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const showPassword = useSelector(store => store.popUp.showPassword);


    const toggleSignUp = () => {
        setSignUp(!signup)
    }

    const handleSubmit = async () => {
        const message = validateData(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return;

        if (signup) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = auth.currentUser;
                    if (user !== null) {
                        const displayName = user.displayName;
                        const email = user.email;
                        const photoURL = USER_AVATAR;
                        const uid = user.uid;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode, ": ", errorMessage);
                });
        } else {

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                      const user = auth.currentUser;
                    if (user !== null) {
                        const displayName = user.displayName;
                        const email = user.email;
                        const photoURL = USER_AVATAR;
                        const uid = user.uid;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode, ": ", errorMessage);

                });
        }

    }

    return <div>
        <Header />
        <div className='absolute' >
            <img className='md:h-full h-screen object-cover opacity-90 ' src={BG_IMG} alt='image' />
        </div>
        <form onSubmit={e => e.preventDefault()} className='py-6 w-full md:w-1/4 absolute bg-black flex flex-col top-40 left-0 md:left-2/5 text-white opacity-85 rounded-xl md:rounded-sm' >
            <h1 className='text-white font-bold text-3xl text-center p-2 m-2'  > {signup ? "Sign Up" : "Sign In"} </h1>

            {signup && <input ref={fullName} type="text" placeholder='Full Name' className='bg-gray-700 py-2 rounded-sm mx-12 my-3' />}

            <input ref={email} type="text" placeholder='Email Address' className='bg-gray-700 py-2 rounded-sm mx-12 my-3' />

             

            <input ref={password} type={showPassword ? "text" : "password"} placeholder='Password' className='bg-gray-700 py-2 rounded-sm mx-12 my-3 ' />

            <button onClick={() => dispatch(toggleShowPassword())} className={`cursor-pointer absolute top-42 md:left-[75%] right-12 p-2 rounded-lg mx-auto bg-conic-270 ${signup ? "md:top-[51%] top-[54%]" : ""} `} >👁️</button>
          

            <p className=' font-bold, text-red-600 p-2 mx-12 ' > {errorMessage} </p>

            <button type='submit' className='bg-red-600 rounded-lg py-2 mx-12 my-5 cursor-pointer ' onClick={handleSubmit} > {signup ? "Sign Up" : "Sign In"} </button>
            {
                signup ? <p className=' mx-12 cursor-pointer ' > Already Registered? <u onClick={() => toggleSignUp()} >SignIn now</u> </p> : <p className=' mx-12 cursor-pointer ' > New User? <u onClick={toggleSignUp} >SignUp now</u> </p>
            }
        </form>
    </div>
}

export default Login;