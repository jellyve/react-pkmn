import * as React from 'react';
import { useState, useContext } from 'react';
import UserContext from './User/User';

interface SetupProps{
    playerName: string;
    playerPetName: string;
    rivalName: string;
    rivalPetName: string;
}

export const Setup: React.FC<SetupProps> = (props) => {
    const {user, setUser} = useContext(UserContext);

    console.log("user",user);

    const [playerName, setPlayerName] = useState(user.playerName);
    const [playerPetName, setPlayerPetName] = useState(user.playerPetName);
    const [rivalName, setRivalName] = useState(user.rivalName);
    const [rivalPetName, setRivalPetName] = useState(user.rivalPetName);
    const [setupFinished, setSetupFinished] = useState(false);

    function startGame(){
        setUser({
            playerName: playerName,
            playerPetName: playerPetName,
            rivalName: rivalName,
            rivalPetName: rivalPetName
          });
        setSetupFinished(true);
    }
  
    return (
      <div className="setup-div">
        <input disabled={setupFinished} value={playerName} onChange={event => setPlayerName(event.target.value)}/>
        <input disabled={setupFinished} value={playerPetName} onChange={event => setPlayerPetName(event.target.value)}/>
        <input disabled={setupFinished} value={rivalName} onChange={event => setRivalName(event.target.value)}/>
        <input disabled={setupFinished} value={rivalPetName} onChange={event => setRivalPetName(event.target.value)}/>
        <button onClick={() => startGame()}>Start</button>
      </div>
    );
  };