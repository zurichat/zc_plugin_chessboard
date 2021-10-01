import React from "react";
//import styled, {keyframes} from "styled-components";


import {
    NextTurnContainer,
    NextTurnContent, 
    animateText
} from "./NextTurnStyles";

const NextTurn = (props, {gameData}) => {
    return (
       // <NextTurnContainer>

            <NextTurnContent>
                <h2 className='next__turn__text'>Your Turn To Play</h2>
                <h3 className='next__turn__text'> {props.name}</h3>
                
            </NextTurnContent>

       // </NextTurnContainer>
    )
}

export default NextTurn;
