import React from "react";
import "./Button.css";

// function ExitButton() {
//   return (
//     <div>
//       <button className="exit-button">Exit</button>
//     </div>
//   );
// }

function ExitButton({ handleClick }) {
  return (
    <div>
      <button
        className="exit-button forfeit-button"
        onClick={() => handleClick()}
      >
        Exit Game{" "}
      </button>
    </div>
  );
}

export default ExitButton;


