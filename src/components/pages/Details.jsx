
import { MdPeopleOutline } from "react-icons/md";
import { FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import { WiDayCloudyWindy } from "react-icons/wi";

import { FaLocationArrow } from "react-icons/fa6";
import { useLoaderData} from "react-router-dom";

const Details = () => {

    const detail = useLoaderData()

    const { countryName, spotName, averageCost, description , location, photoURL, seasonality, totalVisitors, travelTime } = detail

    console.log(detail)
    return (
        <div className="w-11/12 mx-auto mt-10">
            <div className="leading-6 ml-2 mb-5 md:mb-5 lg:mb-7">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{spotName}</h1>
                <h4 className="text-xl md:text-2xl font-semibold  mt-2">{countryName}</h4>
            </div>

            <div className="md:flex  ">
                <div className="flex-1 ">
                    <img className="rounded-lg" src={photoURL} alt="" />
                </div>
                <div className="md:ml-10 mt-4 md:-mt-5">
                    <p className="text-sm opacity-50 ml-1">From</p>
                    <div className='flex items-center mt-1'>
                        <FaDollarSign className='text-xl' />
                        <p className='text-2xl md:text-2xl lg:text-3xl font-bold'>{averageCost}</p>
                    </div>
                   <div className="flex md:flex-none flex-col">
                   <button className="py-3 px-20 rounded-3xl text-white mx-auto my-8 md:my-10 lg:my-12 text-base font-semibold bg-[#4e8fee] hover:bg-[#2c6bc9] ">Check Availability</button>
                   <h4 className="text-base font-semibold text-center md:text-start">Need help with booking? <span className="text-base font-semibold text-[#4e8fee] hover:underline hover:cursor-pointer">Send Us A Message</span></h4>
                   </div>
                </div>
            </div>

            <div>
                <div className="lg:flex justify-between items-center w-3/5 ml-7 mt-14 mb-20">

                    <div>
                        <div className=' flex  items-center'>
                            <FaCalendarAlt className="text-[#4e8fee]" />
                            <p className='text-base ml-3 font-medium opacity-60'>Travel Time</p>
                        </div>
                        <div>
                            <p className='text-lg mt-1 md:mt-0 font-bold'>{travelTime} <span>Days</span></p>

                        </div>
                    </div>

                    <div className="my-3 lg:my-0">
                        <div className='flex items-center '>
                            <WiDayCloudyWindy className='h-7 w-6 text-[#4e8fee]' />

                            <p className='text-base ml-1 md:ml-3 font-medium opacity-60'>Seasonality</p>
                        </div>
                        <div>
                            <p className='text-lg mt-1 md:mt-0 font-bold'>{seasonality}</p>
                        </div>
                    </div>


                    <div>
                        <div className='flex justify-start items-center'>
                            <MdPeopleOutline className='h-8 w-6 text-[#4e8fee]' />
                            <p className='text-base ml-1 md:ml-3 font-medium opacity-60'>Total Visitors Per Year</p>
                        </div>
                        <div>
                            <p className='text-lg  font-bold'>{totalVisitors}</p>
                        </div>
                    </div>

                    <div className="mt-3 lg:mt-0">
                        <div className='flex justify-start items-center'>
                            <FaLocationArrow className='h-6 w-4 text-[#4e8fee]' />
                            <p className="ml-2 md:ml-3 font-medium opacity-60 text-base">Location</p>
                        </div>
                        <div>
                            <p className='text-lg font-bold'>{location}</p>
                        </div>
                    </div>


                </div>

            </div>

            <div className=" w-11/12 mb-20">
                <h3 className="text-2xl font-semibold mb-3">Description:</h3>
                <p className="text-lg ml-7 leading-7">{description}</p>
            </div>
        </div>
    );
};

export default Details;