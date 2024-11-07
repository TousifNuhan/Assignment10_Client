import { Link,  } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Swal from 'sweetalert2'


const Register = () => {


    const { createUser, googleSignIn, githubSignIn, } = useContext(AuthContext)

    const [showpass, setShowPass] = useState(false)

    const handleSignUp = e => {

        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const PhotoURL = form.PhotoURL.value
        console.log(email, password, PhotoURL)
        console.log(typeof (password.length))

        if (password.length < 6) {
            toast.error("You've to give atleast 6 characters", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Bounce
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error("You've to give atleast one uppercase letter", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Bounce
            });
            return;
        }

        else if (!/[a-z]/.test(password)) {
            toast.error("You've to give atleast one lowercase letter", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Bounce
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                Swal.fire({
                    title: "You have Successfully Registered",
                    icon: "success",
                    showClass: {

                        popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
                    },
                    hideClass: {
                        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
                    }
                });

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: PhotoURL
                })
                    .then(() => {
                        console.log('profile updated')
                    })
                    .catch(error => {
                        console.error(error)
                    })

                const user = { name, email, PhotoURL }
                fetch('https://assignment10-eight.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

            })
            .catch(error => {
                console.error(error)
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const email = result.user.email
                const user = { email }
                fetch('https://assignment10-eight.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user)
                // const email=result.user.email 
                // const user={email}
                // fetch('https://assignment10-eight.vercel.app/user',{
                //     method:'POST',
                //     headers:{
                //         'content-type':'application/json'
                //     },
                //     body:JSON.stringify(user)
                // })
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
            {/* Same as */}
            <ToastContainer />
            <div className="flex justify-center items-center mt-10 mb-16">
                <div className="md:flex justify-center flex-1">
                    <div className="md:w-3/5 w-4/5 mx-auto">
                        <h1 className="text-4xl text-black">Sign Up</h1>
                        <form onSubmit={handleSignUp} className=" mt-8">
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-base">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    className="py-3 px-3 rounded-md border focus:outline-none focus:border-blue-400 w-full max-w-xl" required />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-base">Email Address</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="py-3 px-3 rounded-md border focus:outline-none focus:border-blue-400 w-full max-w-xl" required />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-base">PhotoURL</span>
                                </label>
                                <input
                                    type="url"
                                    name="PhotoURL"
                                    placeholder="Enter Your PhotoURL"
                                    className="py-3 px-3 rounded-md border focus:outline-none focus:border-blue-400 w-full max-w-xl" required />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-base">Password</span>
                                </label>
                                <div className="flex justify-end items-center">
                                    <input
                                        type={showpass ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter Password"
                                        className="py-3 px-3 rounded-md border focus:outline-none focus:border-blue-400 w-full max-w-xl relative" required />
                                    <span className="absolute mr-2" onClick={() => setShowPass(!showpass)}>
                                        {showpass ? <IoMdEyeOff className="text-xl" /> : <IoMdEye className="text-xl" />
                                        }

                                    </span>
                                </div>
                            </div>
                            <button className="bg-[#22262a] text-white w-full py-3 rounded-md mt-5 mb-5">Sign Up</button>
                            <p >Already a Member? <Link to="/login" className="underline text-blue-500 cursor-pointer">Sign In Now</Link></p>

                            <div className="flex justify-center items-center my-6">
                                <hr className="border border-[#4c4d4d] w-1/4 md:w-1/5 lg:w-1/3" />
                                <p className="mx-2">Or Continue with</p>
                                <hr className="border border-[#4c4d4d] w-1/4 md:w-1/5 lg:w-1/3" />
                            </div>

                            <div className="flex items-center justify-evenly">
                                <button onClick={handleGoogleSignIn} className="flex btn w-2/5">
                                    <FaGoogle />
                                    <p>Google</p>
                                </button>
                                <button onClick={handleGithubSignIn} className="flex btn w-2/5">
                                    <FaGithub />
                                    <p>Github</p>
                                </button>

                            </div>
                        </form>
                    </div>

                </div>
                <div className="flex-1 md:block hidden">
                    <h4 className="text-3xl lg:text-5xl leading-tight text-black">Join the largest Tourism Management System in the world!</h4>
                </div>

            </div>

        </div>
    );
};

export default Register;