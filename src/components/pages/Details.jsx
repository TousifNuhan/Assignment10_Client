
import { MdPeopleOutline } from "react-icons/md";
import { FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import { WiDayCloudyWindy } from "react-icons/wi";

import { FaLocationArrow } from "react-icons/fa6";

const Details = () => {
    return (
        <div className="w-11/12 mx-auto mt-10">
            <div className="leading-6 ml-2 mb-7">
                <h1 className="text-4xl font-bold">Easter Lake Park</h1>
                <h4 className="text-2xl font-semibold ">Austrailia</h4>
            </div>

            <div className="flex  ">
                <div className="flex-1 ">
                    <img className="rounded-lg" src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="ml-10 -mt-5">
                    <p className="text-sm opacity-50 ml-1">From</p>
                    <div className='flex items-center mt-1'>
                        <FaDollarSign className='text-xl' />
                        <p className='text-3xl font-bold'>5000</p>
                    </div>
                    <button className="py-3 px-20 rounded-3xl text-white mx-auto my-12 text-base font-semibold bg-[#4e8fee] hover:bg-[#2c6bc9]">Check Availability</button>
                    <h4 className="text-base font-semibold">Need help with booking? <span className="text-base font-semibold text-[#4e8fee] hover:underline hover:cursor-pointer">Send Us A Message</span></h4>
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center w-3/5 ml-7 mt-14 mb-20">

                    <div>
                        <div className=' flex  items-center'>
                            <FaCalendarAlt className="text-[#4e8fee]" />
                            <p className='text-base ml-3 font-medium opacity-60'>Travel Time</p>
                        </div>
                        <div>
                            <p className='text-lg  font-bold'>5 <span>Days</span></p>

                        </div>
                    </div>

                    <div>
                        <div className='flex items-center '>
                            <WiDayCloudyWindy className='h-8 w-6 text-[#4e8fee]' />

                            <p className='text-base ml-3 font-medium opacity-60'>Seasonality</p>
                        </div>
                        <div>
                            <p className='text-lg font-bold'>Summer</p>
                        </div>
                    </div>


                    <div>
                        <div className='flex justify-start items-center'>
                            <MdPeopleOutline className='h-8 w-6 text-[#4e8fee]' />
                            <p className='text-base ml-3 font-medium opacity-60'>Total Visitors Per Year</p>
                        </div>
                        <div>
                            <p className='text-lg  font-bold'>500</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-start items-center'>
                            <FaLocationArrow className='h-6 w-4 text-[#4e8fee]' />
                            <p className=" ml-3 font-medium opacity-60 text-base">Location</p>
                        </div>
                        <div>
                            <p className='text-lg font-bold'>Kamarpara</p>
                        </div>
                    </div>


                </div>
              
            </div>

            <div className=" w-11/12 mb-20">
                <h3 className="text-2xl font-semibold mb-3">Description:</h3>
                <p className="text-lg ml-7 leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ullam provident nostrum amet voluptates illo tempore magni animi voluptatibus enim delectus doloribus porro optio beatae praesentium cupiditate, libero placeat aspernatur hic. Dolor, quos illo, nulla harum explicabo, corporis sit nihil culpa ipsum vel reiciendis! Molestiae voluptas dignissimos eum odio, aut hic doloremque perferendis ut quae similique corrupti perspiciatis maiores at repudiandae ea ipsum, tempora fuga facilis natus expedita. Voluptate nihil natus placeat inventore dolorum adipisci perspiciatis reprehenderit corporis obcaecati magnam vel numquam alias aperiam, expedita deleniti totam, tempora perferendis officia molestias magni fuga laboriosam? Animi officiis sit sequi ullam ipsam?</p>
            </div>
        </div>
    );
};

export default Details;