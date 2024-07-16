import { Link, NavLink } from "react-router-dom";



const Header = () => {

    const navLinks = <>
        <li><NavLink className="btn" to="/">Home</NavLink></li>
        <li><NavLink className="btn" to="/allTouristSpot">All Tourists Spot</NavLink></li>
        <li><NavLink className="btn" to="/addTouristSpot">Add Tourists Spot</NavLink></li>
        <li><NavLink className="btn" to="/myList">My List</NavLink></li>

    </>

    return (
        <div>
            <div className="navbar bg-base-100">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="h-20 " src="/src/assets/TravelGenie.png" alt="" />
                        <a className=" text-2xl font-semibold">TravelGenie</a>
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
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img className="mr-3"
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <button className="btn"><Link to="/login">Login</Link></button>
                    <button className="btn"><Link to="/register">Register</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Header;



