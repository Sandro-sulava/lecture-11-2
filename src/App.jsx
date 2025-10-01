import AuthPage from "./components/AuthComponent/AuthPage";
import AuthComponent from "./components/AuthComponent/AuthPage";
import Header from "./components/AuthComponent/Header";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <AuthComponent>
        <AuthProvider>
          <Header />
          <AuthPage />
        </AuthProvider>
      </AuthComponent>
    </div>
  );
};

export default App;
