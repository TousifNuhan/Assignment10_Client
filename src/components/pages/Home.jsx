import App from "../../App";
import Location from "../Location/Location";
import NewsAndUpdates from "../News$Updates/NewsAndUpdates";
import Sponsor from "./Sponsor";

const Home = () => {
    return (
        <div>
            <App></App>
            <Sponsor></Sponsor>
            <Location></Location>
           <NewsAndUpdates></NewsAndUpdates>
        </div>
    );
};

export default Home;