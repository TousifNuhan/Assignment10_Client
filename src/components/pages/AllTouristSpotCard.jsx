import { MdPeopleOutline } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { WiDayCloudyWindy } from "react-icons/wi";
import { FaDollarSign } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const AllTouristSpotCard = ({spot}) => {

    const {_id, countryName, spotName, averageCost, description , location, photoURL, seasonality, totalVisitors, travelTime } = spot

    console.log(spot)
    return (
        <div>
            <div className=" hover:border border-[#f26d52] rounded-xl p-2 ">
                <div className="group">
                    <div className="overflow-hidden rounded-lg ">
                        <img className="rounded-lg group-hover:transition group-hover:scale-110 group-hover:" src={photoURL} alt="" />
                    </div>
                    <div className="flex justify-between mx-auto items-center w-11/12 mt-4 mb-2">

                        <div className=' flex justify-center items-center'>
                            <FaCalendarAlt className="text-[#f26d52]" />
                            <p className='text-base ml-1 font-semibold'>{travelTime}<span>Days</span></p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <WiDayCloudyWindy className='h-8 w-6 text-[#f26d52]' />
                            <p className='text-base ml-1 font-semibold'>{seasonality}</p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <MdPeopleOutline className='h-8 w-6 text-[#f26d52]' />
                            <p className='text-base ml-1 font-semibold'>{totalVisitors}</p>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold w-11/12 mx-auto">{spotName}</h1>
                </div>

                <div className=" flex justify-between w-11/12 mx-auto mt-10 mb-5 ">
                    <div className='flex justify-center items-center'>
                        <FaDollarSign className='text-xl text-[#f26d52]' />
                        <p className='text-2xl font-bold text-[#f26d52]'>{averageCost}</p>
                    </div>
                    <button className="group flex justify-center items-center hover:text-[#f26d52]  ">
                        <Link to={`/details/${_id}`}><p className="text-base font-bold mr-2 flex ">View Details <span> <IoIosArrowRoundForward className="w-5 h-6 group-hover:transform group-hover:duration-1000 duration-1000 group-hover:translate-x-1 group-hover:delay-100 group-hover:ease-in-out" /></span> </p></Link>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllTouristSpotCard;