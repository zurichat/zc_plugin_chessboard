import React from "react";
import "./Homepage.css";
import profileImg from "../../assets/Rectangle 936.png";
import profileOne from "../../assets/Rectangle 892.png";
import profileTwo from "../../assets/Rectangle 894.png";
import profileThree from "../../assets/Rectangle 896.png";
import pawnLogo from "../../assets/Union.png";

const Navbar = () => {
    return (
        <div>
            <div className="nav chesshome-nav">
                <input type="text" placeholder="Search" id="chesshome-search" />
                <div>
                 <img src={profileOne} />
                </div>
            </div>

            <header className="main-header">
                <nav className="nav chesshome-nav">
                    <div id="chesshome-flex">
                        <h1>
                         <img src={pawnLogo} id="pawnLogo" /> Chess
                        </h1>
                        <div>
                            <button id="arrow-button">
                                <i className="arrow down"></i>
                            </button>
                        </div>
                    </div>
                    <div className="chesshome-profileImg">
                        <img src={profileImg} />
                        <div className="chesshome-profile profileOne">
                            <img
                                src={profileOne}
                                style={{ border: "1px solid #fff", borderRadius: "4px" }}
                            />
                        </div>
                        <div className="chesshome-profile profileTwo">
                            <img
                                src={profileTwo}
                                style={{ border: "1px solid #fff", borderRadius: "4px" }}
                            />
                        </div>
                        <div className="chesshome-profile profileThree">
                            <img
                                src={profileThree}
                                style={{ border: "1px solid #fff", borderRadius: "4px" }}
                            />
                        </div>
                        <p className="text-300">300</p>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
