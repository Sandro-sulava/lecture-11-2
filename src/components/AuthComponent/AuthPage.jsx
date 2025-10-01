import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const AuthPage = () => {
  const { user, logIn, logOut } = useContext(AuthContext);
  console.log(user);
  const { username, setUsername } = useState("");
  return (
    <div>
      {user ? (
        <>
          <h2>Hello {user}</h2>
          <button onClick={logOut}>log out</button>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Log in with username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button onClick={logIn(username)}>Log in</button>
        </>
      )}
    </div>
  );
};

export default AuthPage;
