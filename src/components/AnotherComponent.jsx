import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const AnotherComponent = () => {
  const { message, setMessage } = useContext(MessageContext);

  const handleContext = () => {
    setMessage("Hello");
  };
  return (
    <div>
      <h1>This is Another Component {message}</h1>
      <button onClick={handleContext}>Change text to </button>
    </div>
  );
};

export default AnotherComponent;
