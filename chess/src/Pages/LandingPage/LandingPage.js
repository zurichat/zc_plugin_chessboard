import "./LandingPage.css";
import CoverImage from "../../assets/Cover.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return ( 
        <div className="landing-page">
                <img src={ CoverImage } alt="cover image" />
                <Link to = "/chess"><button className="landing_page_button" > PROCEED TO APP</button></Link>
        </div>
     );
};
 
export default LandingPage;