import React from "react";
import "./Input.css";

import Zap from "./images/zap.png";
import Line from "./images/line.png";

import Bold from "./images/bold.png";
import Italic from "./images/italic.png";
// import Link from './images/link.png';
import List from "./images/list.png";
import Atsign from "./images/at-sign.png";
import Paperclip from "./images/paperclip.png";

const Input = () => {
    return (
        <div className="input-container">
            <div className="input-message">
                <form>
                    <input placeholder="Type a message" type="text" />
                    <button type="submit">Send message</button>
                </form>
            </div>

            <div className="input-iconers">
                <div className="icon-left">
                    <img id="layiconers" src={Zap} alt="#" />
                    <img id="layiconers" src={Line} alt="#" />
                    <img id="layiconers" src={Bold} alt="#" />
                    <img id="layiconers" src={Italic} alt="#" />
                    <img id="layiconers" src={List} alt="#" />
                </div>

                <div className="icon-right">
                    <img id="layiconers" src={Atsign} alt="#" />
                    <img id="layiconers" src={Paperclip} alt="#" />
                </div>
            </div>
        </div>
    );
};

export default Input;
