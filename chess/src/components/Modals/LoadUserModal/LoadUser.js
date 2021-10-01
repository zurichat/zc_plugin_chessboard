import React, { useState } from "react";
import LoadUserInfo from "./LoadUserInfo";

// Import the CSS
import Styles from "./UserModal.module.css";

const LoadUser = ({ isModalOpen, setIsModalOpen, gameData }) => {
  const close = () => setIsModalOpen(false);

  if (!isModalOpen) {
    return null;
  }

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
        <h3 className={Styles["room_header"]}># Chess</h3>
        <div className={Styles["room_notification"]}>
          {/* <h4 className={Styles["room_notify"]}>
            Get Notifcation for @ Mentions
          </h4> */}
          {/* <h4 className={Styles["room_notify"]}>Start a Call</h4> */}
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
