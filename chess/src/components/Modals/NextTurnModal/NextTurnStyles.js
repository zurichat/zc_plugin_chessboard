import styled, { keyframes } from "styled-components";



    const NextTurnContent = styled.div`

    background-color: rgba(39, 174, 96, 1);
    display: flex; 
    
    flex-direction: column; 
    width: 50%;
    height: 70%;
    border-radius: 5px;
    padding: 1em 0;
    margin: 2em 0;
    
    justify-content: center;
    align-items: center;
    
    h2{
        font-size: 16px;
        line-height: 1.5em;
        animation: ${animateText} 3s infinite;
    }

    h3{
        color: #fff;
        font-size: 12px;
        line-height: 1em;
     
    }

    @media (max-width: 769px){
        width:25%;
    }
    `;

    const animateText = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
    `;

    

    export{
        NextTurnContent,
           }