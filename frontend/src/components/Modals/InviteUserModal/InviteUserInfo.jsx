import React from 'react';
import Styles from './InviteModal.module.css';

const InviteUserInfo = ({ spectators }) => spectators.map((spectator) => (
  <div key={spectator.user_id} className={Styles['load-user__user']}>
    <div className={Styles['load-user__user--info']}>
      <div className={Styles['load-user__user--img']}>
        <img
          className={Styles['user-img']}
          src={spectator.image_url}
          alt="img.."
        />
      </div>
      <div className={Styles['load-user__user--details']}>
        <p
          className={`${Styles['load-user__user--name']} {${Styles.stack}}`}
        >
          {spectator.user_name}
        </p>
        {/* <p className={Styles["stack"]}>{user.designation}</p> */}
      </div>
    </div>
  </div>
));

export default InviteUserInfo;
