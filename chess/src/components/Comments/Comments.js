import React from "react";
import commentsData from "./Comments.json";
import "./Comments.css";
import avatar from "../../assets/avatar.svg";
import { comments } from "../ChessBoard/ChessBoard";

export default function Comments() {
  return (
    <div className="comments_container">
      <div className="title">Comments</div>
      <div className="comments">
        {!(comments) ? (
          <span className="text-muted">Spectators' comments go here</span>
        ) : (
          comments.map((item, id) => {
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
