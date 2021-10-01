import React, { memo, useEffect, useState, useRef } from "react";
import moment from "moment";
import Forfeit from "../Modals/ForfeitModal/Forfeit";
import Exit from "../Modals/ExitModal/Exit";

// Import CSS for this component
import styles from "./spectatorsidebar.module.css";
import link from "../../assets/comment/link.svg";
import div1 from "../../assets/comment/divider1.svg";
import div2 from "../../assets/comment/divider2.svg";
import zap from "../../assets/comment/zap.svg";
import bold from "../../assets/comment/bold.svg";
import at from "../../assets/comment/at.svg";
import clip from "../../assets/comment/clip.svg";
import send from "../../assets/comment/send.svg";
import dropdown from "../../assets/comment/dropdown.svg";
import emptyComment from "../../assets/comment/emptyComment.svg";
import close from "../../assets/comment/close.svg";

// Import Adapters
import { sendComment } from "../../adapters/comments";

//import style-components
import {
  Chat,
  ChatInputForm,
  ChatWrapper,
  EmptyComment,
  ExitBtn,
  Sidebar,
  SidebarNav,
} from "./SpectatorSidebarStyle";

const SpectatorSideBar = ({ type, gameData }) => {
  const game_id = gameData._id;

  const [commentMsg, setCommentMsg] = useState("");
  const [commentsFromGameData] = useState(gameData.messages);

  const [isModalOpen, setmodalIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  });

  const handleAddComment = () => {
    if (commentMsg.trim().length) {
      sendComment(game_id, commentMsg).then((response) => {
        if (!response.data.success) {
          // TODO: Handle error with Toasts
          console.log("Unable to send comment: ", response.data.message);
        } else {
          // Clear the comment message input
        }
      }, setCommentMsg(""));
    } else {
      // TODO: Handle error with Toasts
      console.log("CommentMsg is empty");
    }
  };

  const handleForfeitModal = () => {
    setmodalIsOpen(true);
  };

  const handleExitModal = () => {
    setIsOpen(true);
  };

  let comment_id = 0;

  return (
    <>
      <aside className={styles["side-bar"]}>
        <nav className={styles["side-bar-nav"]}>
          <div className={styles.navLink}>
            <h2>Comments</h2>
          </div>
          <a className="close">
            <img src={close} alt="" className={styles.closeIcon}/>
          </a>
        </nav>

        <div id={styles.chat}>
          <Exit isOpen={isOpen} setIsOpen={setIsOpen} gameData={gameData} />
          <Forfeit
            isModalOpen={isModalOpen}
            setmodalIsOpen={setmodalIsOpen}
            gameData={gameData}
          />

          <div className={styles.chatContainer}>
            {type !== "spectator" && gameData.status === 0 && (
              <ExitBtn onClick={handleExitModal}>Exit Game</ExitBtn>
            )}

            {type !== "spectator" && gameData.status === 1 && (
              <ExitBtn onClick={handleForfeitModal}>Forfeit Game</ExitBtn>
            )}

            <div className={styles.chatWrapperContainer}>
              {commentsFromGameData.length ? (
                <>
                  {commentsFromGameData.map(
                    ({ user_name, image_url, text, timestamp }) => {
                      return (
                        <div className={styles.chatWrapper} key={comment_id++}>
                          <div className={styles.specHead}>
                            <img
                              className={styles.specAvi}
                              src={image_url}
                              alt="avi"
                            />
                            <div className={styles.specInfo}>
                              <h2 className={styles.spectatorName}>
                                {user_name}
                              </h2>
                              <p className={styles["time-muted"]}>
                                {timestamp}
                              </p>
                            </div>
                          </div>
                          <div className={styles.specNameTime}>
                            <p className={styles.spectatorMessage}>{text}</p>
                          </div>
                        </div>
                      );
                    }
                  )}
                  <div ref={messagesEndRef} />
                </>
              ) : (
                <div className={styles.emptyComment}>
                  <img src={emptyComment} />
                  <h3>It's Quiet Here!</h3>
                  <p>You can make a comment at any point.</p>
                </div>
              )}
            </div>

            {type === "spectator" ? (
              <div className={styles.chatInputForm}>
                <input
                  type="text"
                  value={commentMsg}
                  onChange={(e) => setCommentMsg(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
                  placeholder="Send a comment"
                />
                <div className={styles.inputIcons}>
                  <div className={styles.inputIconsleft}>
                    <img src={zap} className={styles.feather}/> 
                    <img src={div1} className=""/> 
                    <img src={bold} className={styles.feather}/> 
                    <img src={link} className={styles.feather}/> 
                  </div>

                  <div className={styles.inputIconsright}>
                    <img src={at} className={styles.feather}/> 
                    <img src={clip} className={styles.feather}/> 
                    <img src={send} className={styles["submit"]} onClick={handleAddComment}/> 
                    <img src={div2} className=""/> 
                    <img src={dropdown}  className={styles["icon-down"]}/> 
                  

                   

                
                    

                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </aside>
    </>
  );
};

export default React.memo(SpectatorSideBar);
