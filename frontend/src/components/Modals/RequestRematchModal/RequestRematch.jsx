import React from 'react';

// Import Assets for this page
import winnerimage from '../../../assets/modal/winner_image.png';

//  Import CSS for this page
// import "./RequestRematch.css";

// import style-components
import {
  RequestRematchContainer,
  RequestRematchFooter,
  RequestRematchModal,
} from './RequestRematchStyle';

const RequestRematch = () => (
  <RequestRematchContainer className="RequestRematch__container">
    <RequestRematchModal className="RequestRematch__modal">
      <article className="RequestRematch__header">
        <div className="profile">
          <img src={winnerimage} alt="profile" />
        </div>
      </article>
      <div className="RequestRematch__content">
        <p>simideletaiwo! is requesting for a rematch.</p>
      </div>
      <RequestRematchFooter className="RequestRematch__footer">
        <button type="button" className="RequestRematch__button RequestRematch__button--Accept">
          Accept
        </button>
        <button type="button" className="RequestRematch__button RequestRematch__button--Decline">
          Decline
        </button>
      </RequestRematchFooter>
    </RequestRematchModal>
  </RequestRematchContainer>
);

export default RequestRematch;
