import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Location = () => {
    return (
        <div className="w-11/12 mx-auto flex justify-center ">
            {/* details */}
            <div className=" flex-1 px-3 py-8 mt-20">
                <div >
                    <h1 className="text-center ml-20 text-5xl font-medium">Where we are</h1>
                    <div className=" flex justify-center ml-14 items-center mt-5 mb-8">
                        <img className="h-8 w-8 mr-4" src="https://tejal.wpengine.com/wp-content/uploads/2019/01/title-icon-img.png" alt="" />
                        <hr className="w-[14rem] border-[#b8a680]" />
                    </div>
                    <h3 className="text-center text-2xl ml-3 pb-8">Location in the state</h3>
                </div>
                <div className="flex justify-evenly items-center ml-40">
                    <div className="text-[#777777] text-base">
                        <p >Road-13, Sector-7, Uttara</p>
                        <p className="my-1">Dhaka North, 1230</p>
                        <p>Bangladesh</p>
                    </div>
                    <div className="text-base ">
                        <div className="flex items-center ">
                            <MdEmail className="h-5 w-5"/>
                            <p className="ml-2 text-[#777777]">admin@gmail.com</p>
                        </div>
                        <div className="flex items-center my-1">
                            <FaPhoneAlt className="h-5 w-5"/>
                            <p className="ml-2 text-[#777777]">01306001646</p>
                        </div>
                        <div className="flex  items-center">
                            <img className="h-5 w-5 " src="/src/assets/telephone.png" alt="" />
                            <p className="ml-2 text-[#777777] ">48548954-454</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start ">
                    <button className="btn ml-44 mt-5">Get Direction</button>
                </div>
            </div>

            {/* Map */}
            <div className="flex-1">
                <MapContainer center={[23.7506, 90.3682]} zoom={13} scrollWheelZoom={false} id='map' >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[23.7506, 90.3682]}>
                        <Popup>
                            <h1 className='text-red-800 text-xl md:text-5xl'>EmerGent</h1>
                        </Popup>

                    </Marker>

                </MapContainer>
            </div>
        </div>
    );
};

export default Location;