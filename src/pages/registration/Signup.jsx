// import { useContext, useState } from 'react';
// import { Link } from 'react-router-dom'
// import myContext from '../../context/data/myContext';
// import { toast } from 'react-toastify';
// import { GoogleAuthProvider, ProviderId, createUserWithEmailAndPassword } from 'firebase/auth';
// import { Timestamp, addDoc, collection } from 'firebase/firestore';
// import Loader from '../../components/loader/Loader';
// import { auth,fireDB } from '../../firebase/FireBaseConfig';

// function Signup() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const context = useContext(myContext);
//     const { loading, setLoading } = context;

//     const signup = async () => {
//         setLoading(true)
//         if (name === "" || email === "" || password === "") {
//             return toast.error("All fields are required")
//         }
//         const googleSigin = () => {

//         }
//         try {
//             const users = GoogleAuthProvider
//         } catch (error) {

//         }

//         try {
//             const users = await {
//                 createUserWithEmailAndPassword  ,
//                 // GoogleAuthProvider
//             } (auth, email, password);

//             // console.log(users)

//             const user = {
//                 name: name,
//                 uid: users.user.uid,
//                 email: users.user.email,
//                 time : Timestamp.now()
//             }
//             const userRef = collection(fireDB, "users")
//             await addDoc(userRef, user);
//             toast.success("Signup Succesfully")
//             setName("");
//             setEmail("");
//             setPassword("");
//             setLoading(false)
//         }catch (error) {
//             console.log(error)
//             setLoading(false)
//         }
//     }

//     return (
//         <div className=' flex justify-center items-center h-screen'>
//             {loading && <Loader/>}
//             <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
//                 <div className="">
//                     <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
//                 </div>
//                 <div>
//                     <input type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         name='name'
//                         className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
//                         placeholder='Name'
//                     />
//                 </div>

//                 <div>
//                     <input type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         name='email'
//                         className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
//                         placeholder='Email'
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
//                         placeholder='Password'
//                     />
//                 </div>
//                 <div className=' flex justify-center mb-3'>
//                     <button
//                         onClick={signup}
//                         className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
//                         Signup
//                     </button>
//                 </div>
//                 {/* <div>
//                     <button onClick={signup}
//                     className='bg-gray-300 w-full text-black font-bold px-2 py-2 rounded-lg ' >
//                         sigup with google

//                     </button>
//                 </div> */}
//                 <div>
//                     <h2 className='text-white'>Have an account<Link className=' text-red-500 font-bold m-4' to={'/login'}>Login</Link></h2>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Signup

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword ,signInWithPopup } from "firebase/auth";
import { auth, fireDB, googleProvider } from "../../firebase/FireBaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const signup = async () => {
    setLoading(true);
    if (name === "" || email === "" || password === "") {
      return toast.error("All fields are required");
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      // console.log(users)

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Signup Succesfully");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const SinginWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider)
    } catch (error) {
        console.error(error);
    }
};
  

   

  return (
    <div className=" flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button
            onClick={signup}
            className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
          >
            Signup
          </button>
        </div>
        <div>
          <button
                  
            className="inline-flex justify-center   bg-gray-500  w-full text-white font-bold  px-2 py-2 rounded-lg"
            onClick={SinginWithGoogle}
            >

            {/* <img  src="../../assets/google.png" alt="google" /> */}
            Signin With Google
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className=" text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;