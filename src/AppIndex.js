import React, {useState} from 'react';
import MainNav from './components/MainNav';
import FieldBlock from './components/elements/FieldBlock';
import {Form} from './helpers/Form';
import Button from './components/elements/Button';

function AppIndex(){

    const [fields, setFields] = useState({
        email: {value: "", isInvalid: false, msg: ""},
        password: {value: "", isInvalid: false, msg: ""}
    });

    async function success(resp){
        console.log(resp);
    }

    const form = new Form('users/login', fields, setFields, success);

    return(
        <main className="app">
            <MainNav />
            <div className="main-content">
                <h2>Your api domain is: {process.env.REACT_APP_API}</h2>
               <FieldBlock
                    id="email" value={fields.email.value} onChange={form.handleInputChanges} 
                    label="Username:" isInvalid={fields.email.isInvalid} feedback={fields.email.msg}
               />
               <FieldBlock
                    id="password" value={fields.password.value} onChange={form.handleInputChanges}
                    label="Password:" type="password" feedback={fields.password.msg} isInvalid={fields.password.isInvalid}
               />
               <Button variant="primary" onClick={form.submitForm}>Log In</Button>
            </div>
            
        </main>
    );
}

export default AppIndex;