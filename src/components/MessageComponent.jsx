import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const MessageComponent = () => {
  const { message } = useContext(MessageContext);

  return (
    <div>
      <h1>This is Message component</h1>
      {message}
    </div>
  );
};

export default MessageComponent;
