import React, { Component } from 'react'
import './style.css';



export class GameHistory extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        fetch("https://chess.zuri.chat/api/v1/game/all")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json.data,
            })
        console.log(json.data);
        }); 
    }


    showHistory() {
        document.getElementById("gameHistory").style.display = "block";
        document.getElementById("hide_button").style.display = "none";
    }

    render() {
        var { isLoaded, items } = this.state;

        if(!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
            <div className="outer_cover">
                <div className="inner_cover" id="gameHistory">
                    <center><h1>Game History</h1></center>
                       {items.map(item => (
                           <div>
                               <h3 className="game_id">GAME ID: </h3><span className="game_data">{item._id}</span>
                               <br/>

                               <h3 className="game_id">Spectators: </h3>
                               {item.spectators.map((sub)=>
                                <div>
                                    <span className="game_data">{sub.user_name} | {sub.user_id}</span>
                                </div>
                                
                                )}
                            <br/>

                            <h3 className="game_id">Player 1: ----------- </h3>
                            <h3 className="game_id">Player 2: </h3>
                            <br/>
                            <br/>

                            <img className="game_img_owner" src={item.owner.image_url} />
                            <img className="game_img_opponent" src={item.opponent.image_url} />
                            <br/>

                            <span className="game_data">{item.owner.user_name} ------------- {item.opponent.user_name}</span>
                             
                            {/* {item.owner.user_id}-------
                            {item.opponent.user_id} <br/> */}

                            <span className="game_data"> <p className="chess_color">Chess Color </p>( {item.owner.color} )  ----- 
                            <p className="chess_color"> Chess Color </p> ( {item.opponent.color} )</span>
                            Start-time: {item.start_time}
                            <br/>

                            {/* {item.is_owner_winner} <br/>
                             <br/>
                            {item.moves} <br/> */}

                            <br/>
                            <hr />
                            <br/>
                                
                              
                               
                           </div>
                       ))};
                    </div>

                <div className="game_button_cover">
                    <button className="game_button" id="hide_button" onClick={this.showHistory}>Game History</button>
                </div>   
            </div>
            );
        }
    }
}

export default GameHistory;
