import React, { useState, useEffect } from 'react'
import './style.css';
const GameHistory = () => { 
const [data, setState] = useState([]);
const [hasError, setHasError] = useState(false);
useEffect(() => {
    fetch("https://chess.zuri.chat/api/v1/game/all/")
    .then(response => response.json())
    .then(res => setState(res.data))
    .catch(err => setHasError(true))
}, [])
    const [show, showHistory] = useState("hide");
    return (
        <div>
            {hasError ? <div>Loading...</div> : 
            <div className="outer_cover">
                <div className="inner_cover" id={show}>
                    <center><h1>Game History</h1></center>
                       {data.map(item => (
                           <div>
                               <h3 className="game_id">GAME ID: </h3><span className="game_data">{item._id}</span>
                               <br/>
                               <h3 className="game_id">Spectators: </h3>
                               {item.spectators.map((sub)=>
                                <div>
                                    <span className="game_data">{sub.user_name} | {sub.user_id}</span>
                                </div>
                                )};
                            <br/>
                            <h3 className="game_id">Player 1: ----------- </h3>
                            <h3 className="game_id">Player 2: </h3>
                            <br/>
                            <br/>

                            <img className="game_img_owner" src={item.owner.image_url} />
                            <img className="game_img_opponent" src={item.opponent.image_url} />
                            <br/>
                            <span className="game_data">{item.owner.user_name} ------------- {item.opponent.user_name}</span>
                            <span className="game_data"> <p className="chess_color">Chess Color </p>( {item.owner.color} )  ----- 
                            <p className="chess_color"> Chess Color </p> ( {item.opponent.color} )</span>
                            Start-time: {item.start_time}
                            <br/>
                            <br/>
                            <hr />
                            <br/>
                           </div>
                       ))};
                    </div>
                <div className="game_button_cover">
                    <button className="game_button" id="button_display" onClick={ () => {
                        showHistory()
                    }};
                    >
                    Game History</button>
                </div>   
            </div>
            };
        </div>
    );
};


export default GameHistory;
