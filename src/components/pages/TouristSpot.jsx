// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { ServiceData } from '..';

import { FaDollarSign } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import { MdPeopleOutline } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { WiDayCloudyWindy } from "react-icons/wi";
import { Link } from 'react-router-dom';

const TouristSpot = () => {

    return (
        <div className='flex justify-center flex-col items-center h-screen '>

            <div className=' mb-20 text-center'>
                <h3 className='font-Mansalva text-2xl text-[#1dc5ce]'>Select Your Activity</h3>
                <h1 className='text-[#10221b] text-5xl font-bold mt-4 '>Explore Activities</h1>
            </div>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    }
                }}

                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter:true,
                    stopOnLastSlide:false
                  }}

                freeMode={true}
                pagination={{
                    clickable: true,

                }}
                modules={[FreeMode, Pagination, Autoplay]}

                className='mySwiper max-w-[90%] lg:max-w-[80%] lg:max-h-[70%]'
            >

                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title} >

                        <div className=' flex flex-col gap-6 group relative shadow-lg text-white rounded-xl  lg:h-full lg:w-full '>
                            <div className='absolute inset-0 bg-cover bg-center'
                                style={{ backgroundImage: `url(${item.backgroundImage})` }}
                            ></div>
                            <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50'></div>

                            <div className='relative'>
                                <div className='w-10/12 mx-auto group-hover:translate-y-2 group-hover:duration-1000  group-hover:delay-700 group-hover:ease-in'>
                                    <h1 className='mt-[17.5rem] group-hover:-translate-y-[5rem] group-hover:duration-1000 group-hover:delay-300 text-start text-2xl font-semibold'>Dhaka Tour</h1>
                                    <div className=' group-hover:mt-4 invisible group-hover:visible flex w-11/12 justify-between items-center group-hover:-translate-y-[5rem] group-hover:duration-1000 group-hover:delay-300 my-1'>
                                        <div className='flex justify-start items-center'>
                                            <MdPeopleOutline className='h-8 w-6 ' />
                                            <p className='text-lg ml-1 font-semibold'>500</p>
                                        </div>
                                        <div className=' flex justify-center items-center'>
                                            <FaCalendarAlt />
                                            <p className='text-lg ml-1 font-semibold'>5 <span>Days</span></p>
                                        </div>
                                    </div>
                                    <div className='flex justify-start items-center invisible group-hover:visible group-hover:-translate-y-[5rem] group-hover:duration-1000 group-hover:delay-300'>
                                        <WiDayCloudyWindy className='h-8 w-6 ' />
                                        <p className='text-lg ml-1 font-semibold'>Summer</p>
                                    </div>
                                </div>

                                <div className='w-10/12 mx-auto mt-[20rem] -translate-y-[23.5rem] flex items-center justify-between'>
                                    <div className='flex justify-center items-center'>
                                        <FaDollarSign className='text-xl' />
                                        <p className='text-xl font-bold'>500</p>
                                    </div>
                                    <div className=' flex justify-center items-center bg-[#f26d52] cursor-pointer hover:bg-[#ca5c46] px-3 py-3 rounded-md group-hover:ease-in-out '>
                                        <button  className='hover:text-white '><Link to="/details">View Details</Link></button>
                                        <FaLongArrowAltRight className='ml-2 ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>

    );
};

export default TouristSpot;

