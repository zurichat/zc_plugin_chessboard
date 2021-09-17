import React, {forwardRef, useImperativeHandle} from "react";
import "./Portal.css";
import Button from "./../../Button/Button";
import { useState } from "react";
import ReactDOM from "react-dom";
import winner from "../../../assets/winner.png";

const Portal = forwardRef((props, ref) => {

    const [display, setDisplay] = useState(true);

    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            close: () => close()
        };
    });

    const open = () => {
        setDisplay(true);
    };

    const close = () => {
        setDisplay(false);
    };
    
    if(display) {
        
      return (
      
        <div className={"modal-wrapper"}>
                
                <div onClick={close} className={"modal-backdrop"}/>
                
                <div className={"modal-box"}>
                    <div className="modal-profile">
                        <div className="modal-img"><img src={winner} alt="winner-image" /></div>
                    </div>
                    <div className="modal-content">
                        <p>
                            <span>Congratulations</span> @EseMonday
                        </p>
                        <p>You won this round</p>
                    </div>
                    <div className="btn-group">
                        <Button />
                    </div>
                </div>
        </div>

    );
    }

    return null;
});

Portal.displayName = "Portal";

export default Portal;
