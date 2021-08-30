import React, { Component } from "react";
import whitepawn from "../../assets/white_pawn.png";
import blackpawn from "../../assets/black_pawn.png";
import line from "../../assets/Line_6.png";
import "./SelectPieceColor.css"


export default class SelectPieceColor extends Component{
constructor(props){
    super(props);
    this.switchImgblack = this.switchImgblack.bind(this);
    this.switchImgwhite = this.switchImgwhite.bind(this);
    this.state = {
        currentImg : 0,
        images: [
            whitepawn,blackpawn
        ]
    }
}

switchImgblack(){
     if (this.state.currentImg < this.state.images.length - 1) {
      this.setState({
        currentImg: this.state.currentImg + 1
      });
    }
}
switchImgwhite(){
       if (this.state.currentImg > 0) {
      this.setState({
        currentImg: this.state.currentImg = 0
      });
    }
}

    render(){
        return (
            <div className="border">
                <div className="center">
                    <img src={this.state.images[this.state.currentImg]} alt=""/>
                </div>
                <div className="header">
                <img className="line2" src={line} alt="line"/> Piece Color <img className="line3" src={line} alt="line"/>
                </div>
                <div className="color-tile">
                    <div><button onClick={this.switchImgwhite} className="color white"></button></div>
                    <div><button onClick={this.switchImgblack} className="color black"></button></div>
                </div>
            </div>
        )
    }
}