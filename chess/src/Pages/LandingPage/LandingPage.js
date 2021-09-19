import "./LandingPage.css";
import CoverImage from "../../assets/Cover.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="image">
        <img src={CoverImage} alt="cover image" />
      </div>
      <Link to="/">
        <button>PROCEED TO APP</button>
      </Link>
    </div>
  );
};

export default LandingPage;
