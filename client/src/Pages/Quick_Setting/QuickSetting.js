import React from "react";
import "./QuickSetting.css";
import SelectPieceColor from "./components/SelectPieceColor/SelectPieceColor";
import outerellipse from "../../assets/Ellipse_134.png";
import innerellipse from "../../assets/Ellipse_135.png";
import logo from "../../assets/Union.png";
import line from "../../assets/Line_6.png";


export default function QuickSetting(){
    return (
        <div className="container__piececolor">
            <div className="head-container__piececolor">
            <div id="outerellipse__piececolor">
                <img src={outerellipse} alt=""/>
                <div id="innerellipse__piececolor">
                    <img src={innerellipse} alt="" />
                    <div id="logo__piececolor">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="header__piececolor">
                <img className="line__piececolor" src={line} alt="line"/> Quick Settings <img className="second__piececolor" src={line} alt="line"/>
                </div>
            </div>
            </div>
            <div className="components__piececolor">
                <SelectPieceColor />
            </div>
            <button className="advance-button__piececolor">Advanced Settings</button>
        </div>
    )
}