import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './index.css'
import { Link } from "lucide-react";

const Location = () => {
    return (
        <div className="md:w-11/12 mx-auto md:flex md:justify-center -z-10">
            {/* details */}
            <div className="w-4/5 md:w-11/12 flex-1 px-3 py-8 mt-20 mx-auto">
                <div className="">
                    <h1 className="text-start  lg:text-center lg:ml-20 text-4xl md:text-5xl lg:text-6xl font-semibold md:font-medium ">Where we are</h1>
                    <div className=" flex justify-start lg:justify-center items-center mt-5 mb-8 lg:mr-3">
                        <img className="md:h-8 h-5 w-5 md:w-8 md:mr-5 mr-2 " src="https://tejal.wpengine.com/wp-content/uploads/2019/01/title-icon-img.png" alt="" />
                        <hr className="w-[5rem] md:w-[14rem] border-[#b8a680] " />
                    </div>
                    <h3 className="text-start lg:text-center text-2xl md:mr-16 pb-8 ">Location in the state</h3>
                </div>
                <div className="md:flex justify-evenly lg:w-4/5 md:mx-auto lg:ml-32 ">
                    <div className="text-[#777777] text-base ">
                        <p>Road-13, Sector-7, Uttara</p>
                        <p className="my-1">Dhaka North, 1230</p>
                        <p>Bangladesh</p>
                        <div className="md:mt-8 md:my-0 my-6">
                        <a href="https://maps.app.goo.gl/eSkdQmFZ7JG8ZHST6"><button className="btn">Get Direction</button></a>
                        </div>
                    </div>
                    <div className="text-base md:ml-2 lg:ml-0">
                        <div className="flex items-center ">
                            <MdEmail className="h-4 w-5" />
                            <p className="ml-2 text-[#b8a680]">admin@gmail.com</p>
                        </div>
                        <div className="flex items-center my-2 md:my-1">
                            <FaPhoneAlt className="h-4 w-5" />
                            <p className="ml-2 text-[#777777]">+880 1306001646</p>
                        </div>
                        <div className="flex  items-center">
                            <img className="h-4 w-5 " src="/src/assets/telephone.png" alt="" />
                            <p className="ml-2 text-[#777777] ">+485 48954-454</p>
                        </div>
                    </div>
                </div>
              
            </div>

            {/* Map */}
            <div className="flex-1 mt-8 md:mt-20  md:relative z-10">
                <MapContainer center={[23.8713, 90.3972]} zoom={13} scrollWheelZoom={true} id='map' className=" h-96 w-96 mx-auto mb-4" >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[23.8713, 90.3972]}>
                        <Popup>
                            <h1 className='text-red-800 text-xl md:text-5xl'>TravelGenie</h1>
                        </Popup>

                    </Marker>

                </MapContainer>
            </div>
        </div>
    );
};

export default Location;