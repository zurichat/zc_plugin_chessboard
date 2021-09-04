import React from "react";

const PopUp = ({ children }) => {
  return (
    <>
      <div></div>
      <div className="accept_decline_modal_content">{children}</div>
    </>
  );
};

export default PopUp;
