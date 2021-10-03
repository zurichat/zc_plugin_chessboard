import React, { useState } from "react";
import InviteUserInfo from "./InviteUserInfo";

// Import the CSS
import Styles from "./InviteModal.module.css";

// Import image
import Close from "../../../assets/modal/close.svg";

const InviteUser = ({ isModalOpen, setIsModalOpen, gameData }) => {
  const close = () => setIsModalOpen(false);

  if (!isModalOpen) {
    return null;
  }

  console.log(gameData);
  const [usersDetails, setUsersDetails] = useState([...gameData.spectators]);
  const [filterUserDetails, setFilterUserDetails] = useState([
    ...gameData.spectators,
  ]);
  const [noUser, setNoUser] = useState(false);

  const handleInput = (e) => {
    let spectators = usersDetails;

    spectators = filterUserDetails.filter((spectator) =>
      spectator.user_name.toLowerCase().includes(e.target.value.toLowerCase())
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
        <div className={Styles["btn-invite-modal-close"]} onClick={close}>
          <img className="" src={Close} alt="Close" />
        </div>
        <h3 className={Styles["room_header"]}>Invite colleagues to your game</h3>
        <div className={Styles["room_notification"]}>
          {/* <h4 className={Styles["room_notify"]}>
            Get Notifcation for @ Mentions
          </h4> */}
          {/* <h4 className={Styles["room_notify"]}>Start a Call</h4> */}
        </div>
        <p className={Styles["room_para"]}>You can invite your colleagues to play chess with you</p>

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
          {!noUser && <InviteUserInfo spectators={usersDetails} />}
          {noUser && (
            <p className={Styles["load-user__no-user"]}>No Member found..</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InviteUser;
