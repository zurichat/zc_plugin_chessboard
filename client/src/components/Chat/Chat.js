import Input from "./Input/Input";
import "./Chat.css";
import Comment from "../Chat/Comment/Chat";

const Chat = () => {
  return (
    <div id="chat">
      <Comment />
      <Input />
    </div>
  );
};

export default Chat;
