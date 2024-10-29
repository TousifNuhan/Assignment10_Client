import { IoIosArrowDown } from "react-icons/io";
import {  useLoaderData } from "react-router-dom";
import AllTouristSpotCard from "./AllTouristSpotCard";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AllTouristSpot = () => {
    const spots=useLoaderData()
    
    const [sortOption,setSortOption]=useState("")

    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div className="w-full h-screen flex justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }


    const handleSort=option=>{
         setSortOption(option)
    }

    const sortedSpots=[...spots].sort((a,b)=>{
        const costA=parseFloat(a.averageCost.replace(/,/g,''))
        const costB=parseFloat(b.averageCost.replace(/,/g,''))
        if(sortOption === "Low to High"){
          return costA - costB;
        }
        else if(sortOption === "High to Low"){
            return costB - costA
        }
        return 0;
    })
   
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold md:mt-0 mt-5 text-xl md:text-2xl">Tourist Spots</h1>
            <button className="flex justify-center items-center md:w-2/12 lg:w-1/12 text-center dropdown dropdown-bottom bg-[#23BE0A] hover:bg-[#40b82e] px-4 py-2 rounded-lg mt-6 md:mt-8 mb-3 md:mb-6">
                <button tabIndex={0} className="text-base font-semibold text-white flex items-center">Sort By <span><IoIosArrowDown className='ml-2 text-white' /></span></button>
                
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] mt-2 w-52 p-2 shadow">
                    <li><a onClick={()=>handleSort("Low to High")}>Low to High</a></li>
                    <li><a onClick={()=>handleSort("High to Low")}>High to Low</a></li>

                </ul>
            </button>
            <div className="mt-6 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 gap-10  ">
              {
                sortedSpots.map(spot=><AllTouristSpotCard key={spot._id} spot={spot}></AllTouristSpotCard>)
              }

            </div>

        </div>

    );
};

export default AllTouristSpot;