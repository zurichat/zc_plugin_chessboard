import { BrowserRouter } from "react-router-dom";

// Import The Base React Application
import App from "./App";

export default function Root(props) {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
