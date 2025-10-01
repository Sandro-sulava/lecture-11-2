import AuthComponent from "./components/AuthComponent/AuthComponent";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <AuthComponent>
        <AuthProvider></AuthProvider>
      </AuthComponent>
    </div>
  );
};

export default App;
