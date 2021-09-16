import React, { useEffect, useState } from "react";
import "./index.css";
import avi from "../../../assets/ChatAvatar.png";
// import moment from "moment";

const data = {
  players: [
    {
      id: 10,
      name: "Abiola",
    },
    {
      id: 11,
      name: "Ode",
    },
  ],
  comments: [
    {
      id: 1,
      name: "Abby",
      message: "@Yemyemm, I challenge you to a match when these guys are done",
    },
    {
      id: 2,
      name: "Success",
      message: "My teammates are frustrated, maybe a game can help them",
    },
    {
      id: 3,
      name: "DevPriest",
      message: "Move the queen next",
    },
    {
      id: 4,
      name: "Blaze",
      message: "Who wants to challenge me after this game",
    },
    {
      id: 5,
      name: "Odiri",
      message: "I am a proud goat",
    },
  ],
};

// const mainUser = {
//     id: 1,
//     name: "Adebola",
//     message: "hello there",
// };

function Comment() {
  // const [message, setMessage] = useState("");
  const [details, setDetails] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const ids = data.players.map((player) => player.id);
    setDetails(data.comments);
    setPlayers(ids);
  }, []);

  // const submitForm = () => {
  //     const time = moment().format("h:mm a");
  //     const submitted = {
  //         id: 5,
  //         message,
  //         name: "Yemyemm",
  //         time,
  //     };

  //     setDetails([...details, submitted]);
  //     setMessage("");
  // };

  return (
    <div className="chatContainer">
      {details.length ? (
        details.map(({ id, name, time, message }) => (
          <div className="chatWrapper" key={id}>
            <img className="specAvi" src={avi} alt="avi" />
            <div className="specNameTime">
              <div className="specInfo">
                <h2 className="spectatorName">{name}</h2>
                {time ? <p className="time-muted">{time}</p> : null}
              </div>
              <p className="spectatorMessage">{message}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}

      {/* {players.includes(mainUser.id) ? null : (
        <>
          <div className="chatInputForm">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={submitForm}>submit</button>
          </div>
        </>
      )} */}
    </div>
  );
}

export default Comment;
