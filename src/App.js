import { useState, useEffect } from 'react';
import './App.css';
import { Setup } from './Component/Setup';
import { checkHealth } from './Component/Health';
import UserContext from './Component/User/User';


function App() {
  const [user, setUser] = useState({
    playerName: 'player',
    playerPetName: 'baby',
    rivalName: 'rival',
    rivalPetName: 'bitey'
  });
  const userContextValue = {user, setUser};

  console.log("user",user);

  const [healthInput, setHealthInput] = useState(0);
  const [storedHealth, setHealth] = useState(0);
  const [healthDescriptionStringFinal, sethealthDescriptionStringFinal] = useState("");
  const [petName, setPetName] = useState("pet");
  
  useEffect(() => {
    sethealthDescriptionStringFinal(checkHealth(storedHealth,petName));
  },[storedHealth, petName]);
  
  return (
    <UserContext.Provider value={userContextValue}>
      <div>
        <div>
          <Setup 
          // playerName="player" playerPetName="baby" rivalName="rival" rivalPetName="bitey"
          />
          <div>{user.playerName}
          </div>
        </div>
        <input onChange={event => setPetName(event.target.value)}/>
        <input onChange={event => setHealthInput(event.target.value)}/>
        <button onClick={() => setHealth(healthInput)}>Click me</button>
        <div>{storedHealth}</div>
        <div>{healthDescriptionStringFinal}</div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
