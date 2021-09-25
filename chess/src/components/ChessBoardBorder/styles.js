import styled from "styled-components";

export const AlphabetSection = styled.section`
  .wrapper {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    width: 100%;
    height: 100%;
    place-items: center;
    color: rgb(205, 155, 73);
    background: rgb(61, 47, 25);
  }

  .letters {
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    
    @media (max-width: 414px) {
        font-size: 10px;
        line-height: 1.5;
  }
}
`;

export const NumberSection = styled.section`
  height: 100%;

  .wrapper {
    display: grid;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: rgb(205, 155, 73);
    background: rgb(61, 47, 25);
    font-weight: bold;
  }

  .digit {
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    
    @media (max-width: 414px) {
      font-size: 10px;
    }
  }
`;