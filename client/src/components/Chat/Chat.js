import Input from "./Input/Input";
import "./Chat.css";
import Comment from "../Comment/Chat";

const Chat = () => {
  return (
    <div id="chat">
      <h1>Chat</h1>
      {/* yemyem... your component enters here */}
       <Comment />
      <Input />
    </div>
  );
};

export default Chat;
