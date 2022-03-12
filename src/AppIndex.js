import React, {useState} from 'react';
import MainNav from './components/MainNav';
import FieldBlock from './components/elements/FieldBlock';

function AppIndex(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return(
        <main className="app">
            <MainNav />
            <div className="main-content">
                <h2>Your username will be: {username}</h2>
               <FieldBlock
                    id="username" value={username} onChange={(evt) => {setUsername(evt.target.value)}} 
                    label="Username:"
               />
               <FieldBlock
                    id="password" value={password} onChange={(evt) => setPassword(evt.target.value)}
                    label="Password:" type="password" feedback="must be 8 characters" isInvalid={true}
               />
               
            </div>
            
        </main>
    );
}

export default AppIndex;