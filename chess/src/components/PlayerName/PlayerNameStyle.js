import styled from "styled-components";

const PlayerDetails = styled.div`
  display: flex;
  align-items: center;
  font-size: 1em;
  padding: 13px 0;
  width: 100%;
  padding-top: 28px;
  justify-content: flex-end;
  justify-content: flex-end;

  p {
    font-size: 1.8em;
    font-weight: bold;
    padding-left: 5px;
  }

  img {
    width: 3rem;
  }
`;

const WaitingPlayer2Container = styled.div`
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-top: 3.5rem;
  padding-bottom: 3rem;
  padding-left: 1.2rem;

  .waiting_player_2 {
    background-color: transparent;
    padding: 0;
    margin: 0;
    color: #00b87c;
    font-style: italic;

    :hover {
      background-color: transparent;
      padding: 0;
      margin: 0;
      color: #00b87c;
      font-style: italic;
    }
  }
`;

export { PlayerDetails, WaitingPlayer2Container };
