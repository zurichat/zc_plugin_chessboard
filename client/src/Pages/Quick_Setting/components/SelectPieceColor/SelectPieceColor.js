import React, { Component } from "react";
import whitepawn from "../../../../assets/white_pawn.png";
import blackpawn from "../../../../assets/black_pawn.png";
import line from "../../../../assets/Line_6.png";
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
            <div className="border__piececolor">
                <div className="center__piececolor">
                    <img src={this.state.images[this.state.currentImg]} alt=""/>
                </div>
                <div className="header__piececolor">
                <img className="line2__piececolor" src={line} alt="line"/> Piece Color <img className="line3__piececolor" src={line} alt="line"/>
                </div>
                <div className="color-tile__piececolor">
                    <div><button onClick={this.switchImgwhite} className="color__piececolor white__piececolor"></button></div>
                    <div><button onClick={this.switchImgblack} className="color__piececolor black__piececolor"></button></div>
                </div>
            </div>
        )
    }
}