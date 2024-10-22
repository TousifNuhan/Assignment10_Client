import { useContext } from "react";
import App from "../../App";
import Location from "../Location/Location";
import NewsAndUpdates from "../News$Updates/NewsAndUpdates";
import Countries from "./Countries";
import Sponsor from "./Sponsor";
import TouristSpot from "./TouristSpot";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div className="w-full h-screen flex justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    return (
        <div>
            <App></App>
            <TouristSpot></TouristSpot>
            <Countries></Countries>
            <Sponsor></Sponsor>
            <Location></Location>
            <NewsAndUpdates></NewsAndUpdates>
        </div>
    );
};

export default Home;