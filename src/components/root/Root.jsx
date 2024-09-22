import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Root = () => {


    const [darkMode, setDarkMode] = useState(false)

    const navLinks = <>
        <li><NavLink className={darkMode ? 'btn btn-active' : 'btn'} to="/">Home</NavLink></li>
        <li><NavLink className={darkMode ? 'btn btn-active mx-2' : 'btn mx-2'} to="/allTouristSpot">All Tourists Spot</NavLink></li>
        <li><NavLink className={darkMode ? 'btn btn-active mr-2' : 'btn mr-2'} to="/addTouristSpot">Add Tourists Spot</NavLink></li>
        <li><NavLink className={darkMode ? 'btn btn-active' : 'btn'} to="/myList">My List</NavLink></li>

    </>
    const navLinks2 = <>
        <button ><NavLink className={darkMode ? 'btn btn-active mr-2' : 'btn mr-2'} to="/login">Login</NavLink></button>
        <button ><NavLink className={darkMode ? 'btn btn-active' : 'btn'} to="/register">Register</NavLink></button>

    </>



    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'} >
         
            {/* header */}

            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[2] mt-3 w-52 p-2 shadow">
                            {
                                navLinks
                            }
                            {
                                navLinks2
                            }
                        </ul>
                    </div>
                    <div className="flex items-center justify-center ml-3">
                        <img className="h-8 w-8 mr-2" src="https://tejal.wpengine.com/wp-content/uploads/2019/01/title-icon-img.png" alt="" />
                        <a className=" text-2xl font-bold">TravelGenie</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="swap swap-rotate mr-3" onChange={() => setDarkMode(!darkMode)}>
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-3">
                        <div className="w-10 rounded-full">
                            <img className="mr-3"
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navLinks2
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;