import React from 'react';
import ExitButton from '../../components/Button/ExitButton';
import Comments from '../../components/Comments/Comments';
import './style.css';

export default function GameScreen_WithComments() {
  return <main>
    <div id="chessboard_container">
      Chessboard stays here
    </div>
    <div id="side_container">
     <div className="btn_container"> <ExitButton /></div>
      <Comments />
    </div>
  </main>
}