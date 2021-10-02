import React, { useState } from "react";

//Zuri Header
import Parcel from "single-spa-react/parcel";
import { pluginHeader } from "@zuri/plugin-header";

// Import CSS for this page
import styles from "./header.module.css";
// import LoadUser from "../Modals/LoadUserModal/LoadUser";

// Import Assets
import ChessImage from "../../assets/header/chess_piece.svg";
import CommentIcon from "../../assets/header/CommentIcon.png";
import imageProfileOne from "../../assets/header/imageProfileOne.png";
import imageProfileTwo from "../../assets/header/imageProfileTwo.png";
import imageProfileThree from "../../assets/header/imageProfileThree.png";

const Profile = ({ className, src }) => {
  return (
    <div className={className}>
      <img
        src={src}
        style={{ border: "1px solid #01D892", borderRadius: "4px" }}
      />
    </div>
  );
};

function Header({ gameData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewAllSpectatorsModal = () => {
    setIsModalOpen(true);
  };

  function numUsers() {
    let number_of_users_in_room = 0;
    if (gameData) {
      if (gameData.owner) {
        number_of_users_in_room++;
      }

      if (gameData.opponent) {
        number_of_users_in_room++;
      }

      if (gameData.spectators.length > 0) {
        number_of_users_in_room += gameData.spectators.length;
      }
    }
    return number_of_users_in_room;
  }

  const pluginConfig = {
    name: "Chess Plugin", //Name on header
    icon: ChessImage, //Image on header
    thumbnailUrl: [imageProfileOne, imageProfileTwo, imageProfileThree], //Replace with images of users
    userCount: padLeadingZeros(numUsers(), 3), //User count on header
    eventTitle: () => {
      //Block of code to be triggered on title click
    },
    eventThumbnail: () => {
      //Block of code to be triggered on thumbnail click
      handleViewAllSpectatorsModal();
    },
    hasThumbnail: !gameData ? false : true, //set false if you don't want thumbnail on the header
  };

  // pad leading zeros
  function padLeadingZeros(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  return (
    <div>
      <Parcel
        config={pluginHeader}
        wrapWith="div"
        wrapStyle={{ width: "100%" }}
        headerConfig={pluginConfig}
      />

      {/* <LoadUser
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        gameData={gameData}
      /> */}

      {/* <header className={styles["main-header"]}>
        <div className={`${styles.nav} ${styles["chesshome-nav"]}`}>
          <div id={styles["chesshome-flex"]}>
            <h1 id={styles["chesshome-name"]}>
              <img src={ChessImage} id={styles["pawnLogo"]} />
              Chess
            </h1> */}
      {/* <button id="arrow-button">
              <i className="arrow down"></i>
            </button> */}
      {/* </div>
          <div className={styles["chesshome-headerRight"]}> */}
      {/* <a className="commentIcon" onClick={() => setDisplay(true)}> */}
      {/* <a className="commentIcon">
              <img src={CommentIcon} alt="reply" />
            </a> */}
      {/* 
            {number_of_users_in_room > 0 ? (
              <div className={styles["chesshome-profileImg"]}>
                <Profile
                  className={`${styles["chesshome-profile"]} ${styles.profileOne}`}
                  src={imageProfileOne}
                />
                <Profile
                  className={`${styles["chesshome-profile"]} ${styles.profileTwo}`}
                  src={imageProfileTwo}
                />
                <Profile
                  className={`${styles["chesshome-profile"]} ${styles.profileThree}`}
                  src={imageProfileThree}
                />
                <p className={styles["text-300"]}>
                  {padLeadingZeros(number_of_users_in_room, 3)}
                </p>
              </div>
            ) : null}
          </div>
        </div>
            </header> */}
    </div>
  );
}

export default React.memo(Header);
