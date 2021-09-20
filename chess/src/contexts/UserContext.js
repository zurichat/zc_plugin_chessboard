import { useState, useContext, createContext } from "react";

import axios from "../axios/axiosInstance";

// Setup Games Context for global use
const UserContext = createContext();
export const useUser = () => {
  return useContext(UserContext);
};

const UserContextProvider = ({ children }) => {
  // Lekandev`s work!!!
  // Get all ongoing games
  const [userData, setUserData] = useState({});

  // Get all ongoing games function
  const loginUser = async () => {
    const response = await axios.post("https://api.zuri.chat/auth/login", {
      email: "pid@oxy.com",
      password: "pidoxy.com",
    });

    console.log(response.data.data.user);
    setUserData(response.data.data.user);
  };

  return (
    <UserContext.Provider value={{ userData, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
