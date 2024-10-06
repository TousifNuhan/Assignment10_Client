import { IoIosArrowDown } from "react-icons/io";
import { MdPeopleOutline } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { WiDayCloudyWindy } from "react-icons/wi";
import { FaDollarSign } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";


const AllTouristSpot = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl">Tourist Spots</h1>
            <div className="flex justify-center items-center w-1/12 text-center  dropdown dropdown-bottom bg-[#23BE0A] hover:bg-[#40b82e] cursor-pointer px-4 py-2 rounded-lg mt-8 mb-12">
                <button tabIndex={0} className="text-base font-semibold text-white flex items-center">Sort By <span><IoIosArrowDown className='ml-2 text-white' /></span></button>
                
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] mt-2 w-52 p-2 shadow">
                    <li><a>Low to High</a></li>
                    <li><a>High to Low</a></li>

                </ul>
            </div>
            <div className="mt-6 grid grid-cols-3 w-11/12 gap-10 ">
                <div className=" hover:border border-[#f26d52] rounded-xl p-2 ">
                    <div className="group">
                        <div className="overflow-hidden rounded-lg ">
                            <img className="rounded-lg group-hover:transition group-hover:scale-110 group-hover:" src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className="flex justify-between mx-auto items-center w-11/12 mt-4 mb-2">

                            <div className=' flex justify-center items-center'>
                                <FaCalendarAlt className="text-[#f26d52]" />
                                <p className='text-base ml-1 font-semibold'>5 <span>Days</span></p>
                            </div>
                            <div className='flex justify-start items-center'>
                                <WiDayCloudyWindy className='h-8 w-6 text-[#f26d52]' />
                                <p className='text-base ml-1 font-semibold'>Summer</p>
                            </div>
                            <div className='flex justify-start items-center'>
                                <MdPeopleOutline className='h-8 w-6 text-[#f26d52]' />
                                <p className='text-base ml-1 font-semibold'>500</p>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold w-11/12 mx-auto">Easter Lake Park</h1>
                    </div>

                    <div className=" flex justify-between w-11/12 mx-auto mt-10 mb-5 ">
                        <div className='flex justify-center items-center'>
                            <FaDollarSign className='text-xl text-[#f26d52]' />
                            <p className='text-2xl font-bold text-[#f26d52]'>500</p>
                        </div>
                        <button className="group flex justify-center items-center hover:text-[#f26d52]  ">
                         <Link to="/details"><p className="text-base font-bold mr-2 flex " >View Details <span> <IoIosArrowRoundForward className="w-5 h-6 group-hover:transform group-hover:duration-1000 duration-1000 group-hover:translate-x-1 group-hover:delay-100 group-hover:ease-in-out" /></span> </p></Link>

                        </button>
                    </div>
                </div>

                {/* {Main one ends here} */}

                <div className="group hover:border border-[#f26d52]  rounded-xl  ">
                    <div className="overflow-hidden">
                        <img className="rounded-lg group-hover:transition group-hover:scale-110 " src="https://images.unsplash.com/photo-1459949293702-2ec939154ddb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="flex justify-between mx-auto items-center w-11/12 mt-4 mb-2">

                        <div className=' flex justify-center items-center'>
                            <FaCalendarAlt className="text-[#f26d52]" />
                            <p className='text-base ml-1 font-semibold'>5 <span>Days</span></p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <WiDayCloudyWindy className='h-8 w-6 text-[#f26d52]' />
                            <p className='text-base ml-1 font-semibold'>Summer</p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <MdPeopleOutline className='h-8 w-6 text-[#f26d52]' />
                            <p className='text-base ml-1 font-semibold'>500</p>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold w-11/12 mx-auto">Easter Lake Park</h1>

                    <div className="flex justify-between w-11/12 mx-auto mt-7">
                        <div className='flex justify-center items-center'>
                            <FaDollarSign className='text-xl text-[#f26d52]' />
                            <p className='text-2xl font-black text-[#f26d52]'>500</p>
                        </div>
                        <button className="flex justify-center items-center">
                            <p className="text-base font-bold mr-2">View Details</p>
                            <IoIosArrowRoundForward className="w-5 h-10" />
                        </button>
                    </div>
                </div>


                <div className="">
                    <img src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="flex justify-between items-center">
                        <div className='flex justify-start items-center'>
                            <MdPeopleOutline className='h-8 w-6 ' />
                            <p className='text-lg ml-1 font-semibold'>500</p>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <FaCalendarAlt />
                            <p className='text-lg ml-1 font-semibold'>5 <span>Days</span></p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <WiDayCloudyWindy className='h-8 w-6 ' />
                            <p className='text-lg ml-1 font-semibold'>Summer</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="flex justify-between items-center">
                        <div className='flex justify-start items-center'>
                            <MdPeopleOutline className='h-8 w-6 ' />
                            <p className='text-lg ml-1 font-semibold'>500</p>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <FaCalendarAlt />
                            <p className='text-lg ml-1 font-semibold'>5 <span>Days</span></p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <WiDayCloudyWindy className='h-8 w-6 ' />
                            <p className='text-lg ml-1 font-semibold'>Summer</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="flex justify-between items-center">
                        <div className='flex justify-start items-center'>
                            <MdPeopleOutline className='h-8 w-6 ' />
                            <p className='text-lg ml-1 font-semibold'>500</p>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <FaCalendarAlt />
                            <p className='text-lg ml-1 font-semibold'>5 <span>Days</span></p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <WiDayCloudyWindy className='h-8 w-6 ' />
                            <p className='text-lg ml-1 font-semibold'>Summer</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="flex justify-between items-center">
                        <div className='flex justify-start items-center'>
                            <MdPeopleOutline className='h-8 w-6 ' />
                            <p className='text-lg ml-1 font-semibold'>500</p>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <FaCalendarAlt />
                            <p className='text-lg ml-1 font-semibold'>5 <span>Days</span></p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <WiDayCloudyWindy className='h-8 w-6 ' />
                            <p className='text-lg ml-1 font-semibold'>Summer</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="flex justify-between items-center">
                        <div className='flex justify-start items-center'>
                            <MdPeopleOutline className='h-8 w-6 ' />
                            <p className='text-lg ml-1 font-semibold'>500</p>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <FaCalendarAlt />
                            <p className='text-lg ml-1 font-semibold'>5 <span>Days</span></p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <WiDayCloudyWindy className='h-8 w-6 ' />
                            <p className='text-lg ml-1 font-semibold'>Summer</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="flex justify-between items-center">
                        <div className='flex justify-start items-center'>
                            <MdPeopleOutline className='h-8 w-6 ' />
                            <p className='text-lg ml-1 font-semibold'>500</p>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <FaCalendarAlt />
                            <p className='text-lg ml-1 font-semibold'>5 <span>Days</span></p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <WiDayCloudyWindy className='h-8 w-6 ' />
                            <p className='text-lg ml-1 font-semibold'>Summer</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default AllTouristSpot;