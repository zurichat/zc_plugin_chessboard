import React from "react";
import "./QuickSetting.css";
import SelectPieceColor from "./components/SelectPieceColor/SelectPieceColor";
import outerellipse from "../../assets/Ellipse_134.png";
import innerellipse from "../../assets/Ellipse_135.png";
import logo from "../../assets/Union.png";
import line from "../../assets/Line_6.png";


export default function QuickSetting(){
    return (
        <div className="container">
            <div className="head-container">
            <div id="outerellipse">
                <img src={outerellipse} alt=""/>
                <div id="innerellipse">
                    <img src={innerellipse} alt="" />
                    <div id="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="header">
                <img className="line" src={line} alt="line"/> Quick Settings <img className="second" src={line} alt="line"/>
                </div>
            </div>
            </div>
            <div className="components">
                <SelectPieceColor />
                <SelectPieceColor/>
            </div>
            <button className="advance-button">Advanced Settings</button>
        </div>
    )
}