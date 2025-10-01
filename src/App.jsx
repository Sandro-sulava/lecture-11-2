import AnotherComponent from "./components/AnotherComponent";
import MessageComponent from "./components/MessageComponent";
import { MessageProvider } from "./context/MessageContext";

const App = () => {
  return (
    <div>
      <MessageProvider>
        <AnotherComponent />
        <MessageComponent />
      </MessageProvider>
    </div>
  );
};

export default App;
