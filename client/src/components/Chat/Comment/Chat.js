import React, { useEffect, useState } from "react";
import "./index.css";
import avi from "../../../assets/ChatAvatar.png";
import bird from "../../../assets/CommentBird.png";
import moment from "moment";

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
    // {
    //   id: 1,
    //   name: "Abby",
    //   message: "@Yemyemm, I challenge you to a match when these guys are done",
    // },
    // {
    //   id: 2,
    //   name: "Success",
    //   message: "My teammates are frustrated, maybe a game can help them",
    // },
    // {
    //   id: 3,
    //   name: "DevPriest",
    //   message: "Move the queen next",
    // },
    // {
    //   id: 4,
    //   name: "Blaze",
    //   message: "Who wants to challenge me after this game",
    // },
    // {
    //   id: 5,
    //   name: "Odiri",
    //   message: "I am a proud goat",
    // },
  ],
};

const mainUser = {
    id: 1,
    name: "Adebola",
    message: "hello there",
};

function Comment() {
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const ids = data.players.map((player) => player.id);
    setDetails(data.comments);
    setPlayers(ids);
  }, []);

  const submitForm = () => {
      const time = moment().format("h:mm a");
      const submitted = {
          id: 5,
          message,
          name: "Trustiiee",
          time,
      };

      setDetails([...details, submitted]);
      setMessage("");
  };

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
        <div className="emptyComment">
         <img className="commentBird" src={bird} alt="bird"/>
         <h3>It's Quiet Here!</h3>
         <p>You can make a comment at any point.</p>
        </div>
      )}

      {players.includes(mainUser.id) ? null : (
        <>
          <div className="chatInputForm">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder= "Send a comment"
            />
            <div className= "inputIcons">
              <div className="inputIconsleft">
                  <svg className="feather" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.27683 1.40774C9.43311 1.47557 9.52596 1.63832 9.50483 1.80737L8.93472 6.36819H14.1162C14.2651 6.36819 14.4006 6.45433 14.4637 6.58918C14.5269 6.72403 14.5064 6.88325 14.411 6.99765L8.17079 14.4859C8.06172 14.6168 7.87943 14.6601 7.72315 14.5923C7.56687 14.5244 7.47403 14.3617 7.49516 14.1926L8.06526 9.63183H2.88378C2.73487 9.63183 2.5994 9.54569 2.53624 9.41084C2.47308 9.27598 2.49362 9.11677 2.58896 9.00237L8.82919 1.51409C8.93826 1.38321 9.12055 1.3399 9.27683 1.40774ZM3.70315 8.86428H8.49999C8.61007 8.86428 8.71485 8.91155 8.7877 8.99407C8.86055 9.0766 8.89446 9.18643 8.8808 9.29566L8.41914 12.989L13.2968 7.13574H8.49999C8.38991 7.13574 8.28513 7.08847 8.21228 7.00594C8.13943 6.92342 8.10553 6.81359 8.11918 6.70436L8.58084 3.01105L3.70315 8.86428Z" fill="#616061"/>
                  </svg>

                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.87988 2.33341C2.87988 2.03696 3.12021 1.79663 3.41666 1.79663H8.08333C9.66845 1.79663 10.9534 3.08162 10.9534 4.66674C10.9534 6.25186 9.66845 7.53686 8.08333 7.53686H3.41666C3.12021 7.53686 2.87988 7.29653 2.87988 7.00008V2.33341ZM3.95344 2.87019V6.4633H8.08333C9.07554 6.4633 9.87988 5.65895 9.87988 4.66674C9.87988 3.67453 9.07554 2.87019 8.08333 2.87019H3.95344Z" fill="#616061"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.87988 6.99991C2.87988 6.70346 3.12021 6.46313 3.41666 6.46313H8.66666C10.2518 6.46313 11.5368 7.74813 11.5368 9.33325C11.5368 10.9184 10.2518 12.2034 8.66666 12.2034H3.41666C3.12021 12.2034 2.87988 11.963 2.87988 11.6666V6.99991ZM3.95344 7.53669V11.1298H8.66666C9.65887 11.1298 10.4632 10.3255 10.4632 9.33325C10.4632 8.34104 9.65887 7.53669 8.66666 7.53669H3.95344Z" fill="#616061"/>
                  </svg>

                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2499 3H7.49988" stroke="#333333" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.4999 15H3.74988" stroke="#333333" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.2499 3L6.74988 15" stroke="#333333" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.94913 2.12448C10.4659 0.60639 12.8768 0.6281 14.3678 2.17327C15.8589 3.71844 15.8798 6.21688 14.4149 7.78867L14.4077 7.79645L12.4489 9.82621C12.4489 9.82623 12.4489 9.82618 12.4489 9.82621C11.656 10.6481 10.5576 11.0728 9.43895 10.9898C8.32026 10.9067 7.29153 10.3243 6.61974 9.39358C6.42098 9.11822 6.47526 8.72802 6.74098 8.52205C7.00669 8.31608 7.38322 8.37233 7.58198 8.64769C8.04493 9.28907 8.75386 9.69045 9.52479 9.74767C10.2957 9.80489 11.0526 9.51229 11.599 8.94583L13.554 6.91986C14.5601 5.83647 14.5445 4.11742 13.5181 3.05381C12.4916 1.98999 10.8323 1.97405 9.7869 3.01721L8.66709 4.17092C8.43177 4.41336 8.05136 4.41221 7.8174 4.16835C7.58345 3.92449 7.58456 3.53026 7.81988 3.28782L8.94913 2.12448Z" fill="#616061"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.5512 6.17371C5.3441 5.35177 6.4424 4.92722 7.56105 5.01025C8.67974 5.09327 9.70847 5.67572 10.3803 6.60642C10.579 6.88178 10.5247 7.27197 10.259 7.47794C9.99331 7.68391 9.61678 7.62766 9.41802 7.3523C8.95507 6.71093 8.24614 6.30954 7.47521 6.25233C6.70429 6.19511 5.94739 6.4877 5.40097 7.05417L3.44597 9.08012C2.43993 10.1635 2.4555 11.8826 3.48186 12.9462C4.50822 14.0098 6.16706 14.0259 7.2125 12.9834L8.32514 11.8303C8.55977 11.5872 8.94019 11.5872 9.17483 11.8303C9.40946 12.0735 9.40946 12.4677 9.17483 12.7109L8.05093 13.8756C6.5342 15.3936 4.12322 15.3719 2.63217 13.8267C1.14113 12.2815 1.12018 9.7831 2.58509 8.21132L2.59234 8.20354L4.5512 6.17371C4.55117 6.17374 4.55122 6.17369 4.5512 6.17371Z" fill="#616061"/>
                  </svg>

                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.05688 3.74999C5.05688 3.47992 5.27582 3.26099 5.54589 3.26099H13.7457C14.0157 3.26099 14.2347 3.47992 14.2347 3.74999C14.2347 4.02006 14.0157 4.23899 13.7457 4.23899H5.54589C5.27582 4.23899 5.05688 4.02006 5.05688 3.74999Z" fill="#616061"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.05688 7.49999C5.05688 7.22992 5.27582 7.01099 5.54589 7.01099H13.7457C14.0157 7.01099 14.2347 7.22992 14.2347 7.49999C14.2347 7.77006 14.0157 7.98899 13.7457 7.98899H5.54589C5.27582 7.98899 5.05688 7.77006 5.05688 7.49999Z" fill="#616061"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.05688 11.25C5.05688 10.9799 5.27582 10.761 5.54589 10.761H13.7457C14.0157 10.761 14.2347 10.9799 14.2347 11.25C14.2347 11.5201 14.0157 11.739 13.7457 11.739H5.54589C5.27582 11.739 5.05688 11.5201 5.05688 11.25Z" fill="#616061"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.51172 3.74999C3.51172 3.47992 3.29278 3.26099 3.02272 3.26099H2.39196C2.1219 3.26099 1.90296 3.47992 1.90296 3.74999C1.90296 4.02006 2.1219 4.23899 2.39196 4.23899H3.02272C3.29278 4.23899 3.51172 4.02006 3.51172 3.74999Z" fill="#616061"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.51172 7.49999C3.51172 7.22992 3.29278 7.01099 3.02272 7.01099H2.39196C2.1219 7.01099 1.90296 7.22992 1.90296 7.49999C1.90296 7.77006 2.1219 7.98899 2.39196 7.98899H3.02272C3.29278 7.98899 3.51172 7.77006 3.51172 7.49999Z" fill="#616061"/>
                  <path d="M3.02295 11.25H2.3922" stroke="#616061" strokeWidth="0.978006" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

              </div>
              <div className="inputIconsright">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2734 8.07345C11.2734 9.61914 10.0317 10.8722 8.50011 10.8722C6.96849 10.8722 5.72686 9.61914 5.72686 8.07345C5.72686 6.52776 6.96849 5.27473 8.50011 5.27473C10.0317 5.27473 11.2734 6.52776 11.2734 8.07345ZM11.2734 8.07345L11.2734 8.77313C11.2734 9.9324 12.2047 10.8722 13.3534 10.8722C14.5021 10.8722 15.4333 9.9324 15.4333 8.77313V8.07345C15.4331 4.82198 13.2134 1.99913 10.0758 1.26019C6.93825 0.521243 3.70973 2.06096 2.28343 4.97648C0.85713 7.892 1.60897 11.4149 4.09809 13.4794C6.5872 15.5438 10.1576 15.6058 12.7155 13.6289" stroke="#616061" strokeWidth="0.941892" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                 <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.7921 7.77473L8.66548 13.9014C7.10251 15.4644 4.56844 15.4644 3.00548 13.9014C1.44251 12.3384 1.44251 9.80437 3.00548 8.2414L9.13214 2.11473C10.1741 1.07276 11.8635 1.07276 12.9055 2.11473C13.9475 3.15671 13.9475 4.84609 12.9055 5.88807L6.77214 12.0147C6.25115 12.5357 5.40647 12.5357 4.88548 12.0147C4.36449 11.4937 4.36449 10.6491 4.88548 10.1281L10.5455 4.47473" stroke="#616061" strokeWidth="0.941892" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  <svg className="submit" onClick={submitForm} width="18" height="18" viewBox="0 0 18 18" fill="rgba(97, 96, 97, 1)" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.125 9.375L1.875 14.625L4.875 9.375L1.875 4.125L16.125 9.375Z" stroke="#333333" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  <svg className="icon-down" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.49988 6.75L8.99988 11.25L13.4999 6.75" stroke="#333333" strokeWidth="1.22693" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </div>
            </div>
          </div>
        </>
      )}


    </div>
  );
}

export default Comment;
