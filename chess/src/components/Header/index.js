import React, { useState } from "react";

//Zuri Header
import Parcel from "single-spa-react/parcel";
import { pluginHeader } from "@zuri/plugin-header";

// Import CSS for this page
import styles from "./header.module.css";

// Header fix


// Import Assets
import ChessImage from "../../assets/header/chess_piece.svg";
// import CommentIcon from "../../assets/header/CommentIcon.png";
import imageProfileOne from "../../assets/header/imageProfileOne.png";
import imageProfileTwo from "../../assets/header/imageProfileTwo.png";
import imageProfileThree from "../../assets/header/imageProfileThree.png";
import LoadUser from "../Modals/LoadUserModal/LoadUser";

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
    // Name on header
    name: "Chess Plugin",
    // Image on header
    icon: ChessImage,
    // Replace with images of users
    thumbnailUrl: [imageProfileOne, imageProfileTwo, imageProfileThree],
    // User count on header
    userCount: padLeadingZeros(numUsers(), 3),
    eventTitle: () => {
      //Block of code to be triggered on title click
    },
    eventThumbnail: () => {
      // Block of code to be triggered on thumbnail click
      handleViewAllSpectatorsModal();
    },
    // set false if you don't want thumbnail on the header
    hasThumbnail: !gameData ? false : true,
  };

  // pad leading zeros
  function padLeadingZeros(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  return (
    <div>
      <div className={styles["header-fixed"]}>
        <Parcel
          config={pluginHeader}
          wrapWith="div"
          wrapStyle={{ width: "100%" }}
          headerConfig={pluginConfig}
        />
      </div>
      

      <LoadUser
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        gameData={gameData}
      />
    </div>
  );
}

export default React.memo(Header);
