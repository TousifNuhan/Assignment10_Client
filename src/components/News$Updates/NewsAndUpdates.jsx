import { RiSendPlaneLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

const NewsAndUpdates = () => {
  return (
    <div className="flex flex-col items-center bg-[#b8a680] opacity-90 z-20">
      <div className="text-center w-9/12 pt-20 pb-16 bg-[#ffffff] relative bottom-36 border">
        <h3 className="text-[#b8a680] text-3xl font-medium">Stay in Touch</h3>
        <p className="text-xl mt-8 mb-7">SignUp to receive news and updates.</p>
        <form className="flex justify-center items-center">
          <input type="email" name="email" placeholder="Your Email Address" className="border py-3 px-5 w-3/5 relative" />
          <button> <RiSendPlaneLine className="relative right-9 w-8 h-5 " /></button>
        </form>
      </div>
      <div className="flex justify-evenly w-4/5 text-xl font-medium text-white mb-20">
        <button className="flex justify-center items-center">
          <p><FaFacebookF /></p>
          <p> - Facebook</p>
        </button>
        <button className="flex justify-center items-center">
          <p><FaGoogle /></p>
          <p> - Google</p>
        </button>
        <button className="flex justify-center items-center">
          <p><FaTwitter /></p>
          <p> - Twitter</p>
        </button>
        <button className="flex justify-center items-center">
          <p><FaPinterestP /></p>
          <p> - Pinterest</p>
        </button>

      </div>
    </div>
  );
};

export default NewsAndUpdates;