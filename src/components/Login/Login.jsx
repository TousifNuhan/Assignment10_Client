import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'


const Login = () => {

    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    title: "Successfully Logged In",
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
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    title: "Incorrect Password",
                    text: "Please try again!",
                    icon: "error",
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
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Successfully Logged In",
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
                const email = result.user.email
                const user = { email }

                fetch('http://localhost:5000/user',
                    {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    }
                )
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
                Swal.fire({
                    title: "Successfully Logged In",
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
                // const email=result.user.email 
                // const user={email}
                // fetch('http://localhost:5000/user',{
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
            <div className="md:flex justify-center items-center mt-10 mb-16  ">
                <div className="md:flex justify-center md:flex-1 ">
                    <div className="md:w-3/5  w-4/5 mx-auto">
                        <h1 className="text-4xl text-black ">Sign In</h1>
                        <form onSubmit={handleLogin} className=" mt-8">
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-base">Email Address</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="py-3 px-3 rounded-md border focus:outline-none focus:border-blue-400 w-full  md:max-w-xl" required />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-base">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    className="py-3 px-3 rounded-md border focus:outline-none focus:border-blue-400 w-full max-w-xl" required />
                            </div>
                            <div className="w-full flex flex-col items-center">
                                <button className="bg-[#22262a] text-white w-full py-3 rounded-md mt-5 mb-5 ">Sign In</button>

                                <p >Not a Member? <Link to="/register" className="underline text-blue-500 cursor-pointer">Sign Up Now</Link></p>
                            </div>

                            <div className="flex justify-center items-center my-6">
                                <hr className="border border-[#4c4d4d] w-1/4 md:w-1/5 lg:w-1/3" />
                                <p className="mx-2 ">Or Continue with</p>
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
                <div className="md:flex-1 md:block hidden">
                    <h4 className="md:text-3xl lg:text-5xl leading-tight text-black">Join the largest Tourism Management System in the world!</h4>
                </div>
            </div>
            
        </div>
    );
};

export default Login;