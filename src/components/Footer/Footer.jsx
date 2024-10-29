import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="py-24 bg-zinc-800 text-white">
            <div className="flex justify-center items-center">
                <img className="h-8 w-8 mr-4" src="https://tejal.wpengine.com/wp-content/uploads/2019/01/title-icon-img.png" alt="" />
                <a className="text-2xl md:text-3xl font-bold">TravelGenie</a>
            </div>
            <div className="flex justify-center mt-8 md:mt-16 mb-6">
                <hr className="w-4/5 border-[#b8a680]" />
            </div>
            <div className="flex flex-col md:flex-row  justify-evenly">
                <div className="md:flex-none flex justify-center">
                    <p className="text-base font-medium">&copy; 2017.All Rights Reserved</p>
                </div>
                <div className="flex justify-between text-base font-medium md:mt-0 mt-5">
                    <Link to="/"><p >Home</p></Link>
                    <p className="mx-2 ">-</p>
                    <p >About Us</p>
                    <p className="mx-2">-</p>
                    <p>Terms and Conditions</p>
                    <p className="mx-2">-</p>
                    <p>Booking</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;