import React, { useState } from "react";
import LoadUserInfo from "./LoadUserInfo";
import icon from "../../../assets/modal/close.svg";

// Import the CSS
import Styles from "./UserModal.module.css";

const LoadUser = ({ isModalOpen, setIsModalOpen, gameData }) => {
  const close = () => setIsModalOpen(false);

  if (!isModalOpen) {
    return null;
  }

  const [usersDetails, setUsersDetails] = useState([
    ...gameData.spectators,
    gameData.owner,
    // If Game Opponent is not null
    gameData.opponent !== null && gameData.opponent,
  ]);
  const [filterUserDetails, setFilterUserDetails] = useState([
    ...gameData.spectators,
    gameData.owner,
    gameData.opponent,
  ]);
  const [noUser, setNoUser] = useState(false);

  const handleInput = (e) => {
    let spectators = usersDetails;

    spectators = filterUserDetails.filter(
      (spectator) =>
        spectator?.username !== null &&
        spectator?.user_name
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
    );

    if (spectators.length === 0) {
      setNoUser(true);
    } else {
      setNoUser(false);
    }

    setUsersDetails(spectators);
  };

  return (
    <div className={Styles["load-user__backdrop"]}>
      <div className={Styles["load-user__modal"]}>
        <button className={Styles["btn-user-modal-close"]} onClick={close}>
          <img className={Styles["modal-close-img"]} src={icon} alt="Close" />
        </button>
        <h3 className={Styles["room_header"]}># Chess</h3>
        <div className={Styles["room_notification"]}>
          {/* <h4 className={Styles["room_notify"]}>
            Get Notifcation for @ Mentions
          </h4>
          <h4 className={Styles["room_notify"]}>Start a Call</h4> */}
        </div>
        <p className={Styles["room_para"]}>Members</p>

        <form className={Styles["load-user__form"]}>
          <input
            className={Styles["searchbar"]}
            type="text"
            autoComplete="off"
            name="text"
            onChange={handleInput}
            placeholder="Find Members"
          />
        </form>

        <div className={Styles["load-user__users"]}>
          {!noUser && <LoadUserInfo spectators={usersDetails} />}
          {noUser && (
            <p className={Styles["load-user__no-user"]}>No Member found..</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadUser;
