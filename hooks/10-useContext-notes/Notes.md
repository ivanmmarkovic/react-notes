
# Create context

```

import { createContext } from "react";

export const LoginContext = createContext({});

```

# Import context in parent component 

```

import {LoginContext} from './context/LoginContext';


```

# Wrap components in context

```

function App() {

  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <div>
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
        {showProfile ? <Profile /> : <LoginForm />}
      </LoginContext.Provider>
    </div>
  );
}

```

# Provider - you will use LoginContext as provider

# Using context
- import specific context, LoginContext
- use useContext hook


```

import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"


export function LoginForm(){

    const {setUsername, setShowProfile} = useContext(LoginContext);

    const handleClick = (e) => {
        setShowProfile(true);
    };

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    return <div>
        <input type="text" onChange={handleChange}/><br />
        <input type="password" /><br />
        <button onClick={handleClick}>Login</button>
    </div>
}


import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"


export function Profile(){

    const {username} = useContext(LoginContext);

    return <h1>Username : {username}</h1>

}

```
