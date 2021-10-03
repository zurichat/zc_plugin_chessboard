import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { getAllGames } from "../../adapters/home";

const GameHistory = () => {

const [games, setGames] = useState([]);
const [hasError, setHasError] = useState(false);


useEffect(() => {
    getAllGames().then((response) => {
      if (!response.data.success) {
        // TODO: Handle error with Toasts
        console.log("Unable to Get All Games: ", response.data.message);
      } else {
        // Allow us to have empty DB
        if (response.data.data !== null) {
          setGames(response.data.data);
          console.log(response.data.data);
        }
      }
    }).catch(err => setHasError(true));
    
  }, []);


    const [showHistory, setShowHistory] = useState(false);

    const onShow = ()=> {
        setShowHistory(!showHistory);
    };

    return (
        <div>
            {hasError ? <div>Loading...</div> : 
            showHistory ?
            <div className={styles["outer_cover"]}>
                <div className={styles["inner_cover"]}>
                    <center><h4>Game History</h4></center>
            
                       {games.map(item => (
                           <div>
                               <h3 className={styles["game_id"]}>GAME ID: </h3><span className={styles["game_data"]}>{item._id}</span>
                               {/* <br/> */}
                               <h3 className={styles["game_id"]}>Spectators: </h3>
                               {item.spectators.map((sub)=>

                                
                                <div>
                                    <span className={styles["game_data"]}>{sub.user_name} | {sub.user_id}</span>
                                </div>
                                )};


                            <br/>
                            <h3 className={styles["game_id"]}>Player 1: ----------- </h3>
                            <h3 className={styles["game_id"]}>Player 2: </h3>
                            <br/>
                            <br/>

                            { item.status === 0 ? null : 
                                    <div> 
                        
                        <img className={styles["game_img_owner"]} src={item.owner.image_url} />
                        
                        <img className={styles["game_img_opponent"]} src={item.opponent.image_url} /> 
                        <br/>
                         <span className={styles["game_data"]}>{item.owner.user_name} ------------- {item.opponent.user_name}</span>
                            <span className={styles["game_data"]}> <p className={styles["chess_color"]}>Chess Color </p>( {item.owner.color} )  ----- 
                            <p className={styles["chess_color"]}> Chess Color </p> ( {item.opponent.color} )</span> 
                            Start-time: {item.start_time})

                            </div>

}
                            <br/>
                            <br/>
                            <hr />
                            <br/>


                           </div>
                       ))};
                    </div>
                    
               
            </div>
             : null 
             
}
   
                <div className={styles["game_button_cover"]}>
                    <button className={styles["game_button"]} id={styles["button_display"]} onClick={onShow}
                    >
                    Game History</button>
                </div>

 
        </div>

        
    );
};
export default GameHistory;