import App from "../../App";
import Location from "../Location/Location";
import NewsAndUpdates from "../News$Updates/NewsAndUpdates";
import Countries from "./Countries";
import Sponsor from "./Sponsor";
import TouristSpot from "./TouristSpot";

const Home = () => {
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