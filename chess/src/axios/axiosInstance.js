import axios from "axios";

/** base url to make requests to the chess plugin API */
const instance = axios.create({
  baseURL: "https://chess.zuri.chat/api/v1/",
});

export default instance;
