import App from "../../App";
import Location from "../Location/Location";
import NewsAndUpdates from "../News$Updates/NewsAndUpdates";

const Home = () => {
    return (
        <div>
            <App></App>
            <Location></Location>
           <NewsAndUpdates></NewsAndUpdates>
        </div>
    );
};

export default Home;