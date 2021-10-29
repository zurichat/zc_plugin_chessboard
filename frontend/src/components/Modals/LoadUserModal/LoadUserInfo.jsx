/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import Styles from './UserModal.module.css';

const LoadUserInfo = ({ spectators }) =>
  spectators.map((spectator) => {
    if (spectator) {
      return (
        <div key={spectator.user_id} className={Styles['load-user__user']}>
          <div className={Styles['load-user__user--info']}>
            <div className={Styles['load-user__user--img']}>
              <img className={Styles['user-img']} src={spectator.image_url} alt="img.." />
            </div>
            <div className={Styles['load-user__user--details']}>
              <p className={`${Styles['load-user__user--name']} {${Styles.stack}}`}>
                {spectator.user_name}
              </p>
            </div>
          </div>
        </div>
      );
    }
  });

export default LoadUserInfo;
