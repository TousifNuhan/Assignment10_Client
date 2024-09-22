import Marquee from "react-fast-marquee";

const Sponsor = () => {
    return (
        <div className="mt-14">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl  font-semibold">Corporate Partners</h1>
                <hr className="border-2 border-[#4c4d4d] w-20 mb-5 mt-10"/>
            </div>
            <Marquee pauseOnHover={Boolean} className="mt-8">
                <img className="h-52 mr-20" src="https://cdn.vectorstock.com/i/500p/91/80/adventure-vintage-logo-vector-21209180.avif" alt="" />
                <img className="h-32 mr-20" src="https://cdn.asp.events/CLIENT_Briefing_1C55814B_5056_B739_544022F19077A8D2/sites/LLT2024/media/Full-Colour-2-.png" alt="" />
                <img className="h-52 mr-20" src="https://corp.changegroup.com/dam/jcr:69ee79f6-41f9-415c-8f7e-6df6a9bab989/logo@2x.png" alt="" />
                <img className="h-20 mr-20" src="https://cdn.worldvectorlogo.com/logos/sykes-holiday-cottages.svg" alt="" />
                <img className="h-40 mr-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZJzelipFlrjop_HXQbiBWg78fH6V3BDgxrQ&s" alt="" />
            </Marquee>
        </div>
    );
};

export default Sponsor;