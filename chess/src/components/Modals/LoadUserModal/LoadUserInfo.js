import React from "react";
import icon from "../../../assets/modal/winner_image.png";

import Styles from "./UserModal.module.css";

const LoadUserInfo = (props) => {
  // console.log(props.players)
    return (
      props.users.map(user => 
        (
          <div key={user.id} className={Styles["load-user__user"]}>
        <div className={Styles["load-user__user--info"]}>
          <div className={Styles["load-user__user--img"]}>
            <img  className={Styles["user-img"]} src={icon} alt="img.."></img>
          </div>
        <div className={Styles["load-user__user--details"]}>
            <p className={`${Styles["load-user__user--name"]} {${Styles["stack"]}}`}>{user.name}</p>
            <p className={Styles["stack"]}>{user.designation}</p>
        </div>
        </div>
      </div>
        )
      )

    );
};

export default LoadUserInfo; 