import { useEffect, useRef, useState } from 'react';
import { validateData } from '../utils/validation';
import Header from './Header';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Login = () => {
    const [signup, setSignUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null)
    const password = useRef(null)
    const fullName = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch();


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
                    // Signed up 
                    const user = userCredential.user;
                    // user.displayName = fullName.current.value;
                    // user.photoURL = 'https://avatars.githubusercontent.com/u/181729549?v=4';
                    const {email, displayName, photoURL} = user;
                    dispatch(addUser({email: email, displayName: displayName, photoURL: 'https://avatars.githubusercontent.com/u/181729549?v=4'}));
                    navigate('/browse')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode, ": ", errorMessage);
                    // ..
                });
        } else {

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // user.displayName = fullName.current.value;
                    // user.photoURL = 'https://avatars.githubusercontent.com/u/181729549?v=4';
                    const {email, displayName, photoURL} = user;
                    dispatch(addUser({email: email, displayName: displayName, photoURL: 'https://avatars.githubusercontent.com/u/181729549?v=4'}));
                    navigate('/browse')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode, ": ", errorMessage);

                });
        }

    }

    // useEffect(() => {

    //     // signOut(auth).then(() => {
    //     //     // dispatch(removeUser());
    //     //     // Sign-out successful.
    //     // }).catch((error) => {
    //     //     // An error happened.
    //     //     console.log(error)
    //     // });

    //     onAuthStateChanged(auth, (user) => {
    //         console.log(user)
    //         if (user) {
    //             // User is signed in, see docs for a list of available properties
    //             // https://firebase.google.com/docs/reference/js/auth.user
    //             const { uid, email, displayName } = user;
    //             dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
    //             // ...
    //         } else {
    //             dispatch(removeUser());
    //             // User is signed out
    //             // ...
    //         }
    //     });
    // }, [])

    return <div>
        <Header />
        <div className='absolute' >
            <img className=' opacity-90 ' src='https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg' alt='image' />
        </div>
        <form onSubmit={e => e.preventDefault()} className='py-6 w-1/4 absolute bg-black flex flex-col top-40 left-2/5 text-white opacity-80 ' >
            <h1 className='text-white font-bold text-3xl text-center p-2 m-2'  > {signup ? "Sign Up" : "Sign In"} </h1>

            {signup && <input ref={fullName} type="text" placeholder='Full Name' className='bg-gray-700 py-2 rounded-sm mx-12 my-3' />}

            <input ref={email} type="text" placeholder='Email Address' className='bg-gray-700 py-2 rounded-sm mx-12 my-3' />
            <input ref={password} type="password" placeholder='Password' className='bg-gray-700 py-2 rounded-sm mx-12 my-3 ' />

            <p className=' font-bold, text-red-600 p-2 mx-12 ' > {errorMessage} </p>

            <button type='submit' className='bg-red-600 rounded-lg py-2 mx-12 my-5 cursor-pointer ' onClick={handleSubmit} > {signup ? "Sign Up" : "Sign In"} </button>
            {
                signup ? <p className=' mx-12 cursor-pointer ' > Already Registered? <u onClick={() => toggleSignUp()} >SignIn now</u> </p> : <p className=' mx-12 cursor-pointer ' > New User? <u onClick={toggleSignUp} >SignUp now</u> </p>
            }
        </form>
    </div>
}

// className='mx-12 cursor-pointer 
export default Login;