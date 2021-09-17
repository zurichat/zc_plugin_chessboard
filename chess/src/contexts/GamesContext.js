import { useState, createContext } from "react";

import axios from "../axios/axiosInstance";

// Setup Games Context for global use
export const GamesContext = createContext();

const GamesContextProvider = ({ children }) => {
  // Lekandev`s work!!!
  // Get all ongoing games
  const [gamesData, setGamesData] = useState({});

  // Get all ongoing games function
  async function getGamesData() {
    try {
      // Fetch ongoing games
      const games = await axios.get("/game/all");
      // Set gamesData state to response
      setGamesData(games);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <GamesContext.Provider value={gamesData}>{children}</GamesContext.Provider>
  );
};

export default GamesContextProvider;
