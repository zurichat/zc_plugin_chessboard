import React from 'react';
// import {Link} from 'react-router-dom'
import "./Button.css";
// import PropTypes from 'prop-types';

// forfeitButton.propTypes = {
    
// };

function ForfeitButton({ handleClick }) {
    return (
        <div>
            <button className="exit-button forfeit-button" onClick = { () => handleClick() }>Forfeit Game </button>
        </div>
    );
}

export default ForfeitButton;