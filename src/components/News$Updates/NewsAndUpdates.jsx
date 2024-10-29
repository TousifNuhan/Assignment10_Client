import { RiSendPlaneLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

const NewsAndUpdates = () => {
  return (
    <div className="flex flex-col items-center bg-[#b8a680] opacity-90 md:relative z-20 md:px-0 px-5">
      <div className="text-center w-9/12 pt-20 pb-16 bg-[#ffffff] md:relative md:bottom-36 mt-10 md:mt-0 ">
        <h3 className="text-[#b8a680] text-3xl font-medium">Stay in Touch</h3>
        <p className="text-base md:text-xl mt-8 mb-7">SignUp to receive news and updates.</p>
        <form className="flex justify-center items-center">
          <input type="email" name="email" placeholder="Your Email Address" className="border py-3 px-5 md:w-3/5 relative" />
          <button> <RiSendPlaneLine className="relative right-9 w-4 md:w-8 h-5 " /></button>
        </form>
      </div>
      <div className="flex flex-col md:flex-row md:justify-evenly w-4/5 text-xl font-medium text-white mb-20">
        <button className="flex justify-center items-center md:mt-0 mt-14 ">
          <p><FaFacebookF /></p>
          <p> - Facebook</p>
        </button>
        <button className="flex justify-center items-center md:my-0 my-5">
          <p><FaGoogle /></p>
          <p> - Google</p>
        </button>
        <button className="flex justify-center items-center">
          <p><FaTwitter /></p>
          <p> - Twitter</p>
        </button>
        <button className="flex justify-center items-center md:mt-0 mt-5">
          <p><FaPinterestP /></p>
          <p> - Pinterest</p>
        </button>

      </div>
    </div>
  );
};

export default NewsAndUpdates;