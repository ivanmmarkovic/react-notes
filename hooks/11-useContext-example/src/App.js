import { useState } from "react";
import LoginForm from "./components/LoginForm";
import MyComponent from "./components/MyComponent";
import { LoginContext } from "./context/LoginContext";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <div>
      <LoginContext.Provider value={{username, setUsername, isLoggedIn, setIsLoggedIn}}>
        <LoginForm />
        <MyComponent />
      </LoginContext.Provider>
    </div>
  );

}

export default App;
