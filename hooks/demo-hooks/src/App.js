import { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { Profile } from './components/Profile';
import {LoginContext} from './context/LoginContext';

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

export default App;
