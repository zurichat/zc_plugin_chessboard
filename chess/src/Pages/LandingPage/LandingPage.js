import "./LandingPage.css";
import CoverImage from "../../assets/Cover.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return ( 
        <div className="landing-page">
<<<<<<< HEAD
                <img src={ CoverImage } alt="cover image" />
                <Link to = "/chess"><button className="landing_page_button" > PROCEED TO APP</button></Link>
=======
                <div className="image"><img src={ CoverImage } alt="cover image" /></div>
                <Link to = "/chess"><button>PROCEED TO APP</button></Link>
>>>>>>> a0100ac5bf2712ccad668c2a9d4cf5cc7ac19817
        </div>
     );
};
 
export default LandingPage;