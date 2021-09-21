// Import CSS for this page
import "./playername.css";

// Import Assets
import Avatar from "../../assets/playername/user.png";

const PlayerName = (props) => {
    if (!props.name) {
        return (
            <div className="waiting_player_2_container">
                <button className="waiting_player_2"> Waiting for player</button>
            </div>
        );
    }

    return (
        <div className="player__details" style={props.style}>
            <img src={Avatar} alt="" />
            <p>{props.name}</p>
        </div>
    );
};

export default PlayerName;
