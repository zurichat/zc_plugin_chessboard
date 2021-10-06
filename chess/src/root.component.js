import { BrowserRouter } from "react-router-dom";

// Import The Base React Application
import App from "./App";

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
