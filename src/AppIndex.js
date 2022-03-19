import React, {useState, useContext} from 'react';
import MainNav from './components/MainNav';
import FieldBlock from './components/elements/FieldBlock';
import {Form} from './helpers/Form';
import Button from './components/elements/Button';
import {AuthContext} from './contexts/AuthContext';

function AppIndex(){

    const [fields, setFields] = useState({
        email: {value: "", isInvalid: false, msg: ""},
        password: {value: "", isInvalid: false, msg: ""}
    });
    const data = useContext(AuthContext);

    async function success(resp){
        console.log(resp);
    }

    const form = new Form('users/login', fields, setFields, success);

    return(
        <main className="app">
            <MainNav />
            <div className="main-content">
                <h2>Your api domain is: {process.env.REACT_APP_API}</h2>
                
            </div>
            
        </main>
    );
}

export default AppIndex;