import React from "react";
import commentsData from "./comments.json";
import "./Comments.css";
import avatar from "../../assets/avatar.svg";

export default function Comments() {
  return (
    <div className="comments_container">
      <div className="title">Comments</div>
      <div className="comments">
        {!commentsData.length ? (
          <span className="text-muted">Spectators' comments go here</span>
        ) : (
          commentsData.map((item, id) => {
            return (
              <div key={`comment-${id + 1}`} className="comment_container">
                <img src={avatar} alt="" />
                <div>
                  <div>
                    <span className="name">{item.name}</span>{" "}
                    <span className="faded">{item.time}</span>
                  </div>
                  <p className="comment">{item.comment}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

// <div
//   key={`comment-${id + 1}`}
//   className="comment-container"
// >
//   <img src={item.avatar}/>
//   <div>
//     <div><span>{item.name}</span> <span>{item.time}</span></div>
//     <p>{item.comment}</p>
//   <div>
// </div>
