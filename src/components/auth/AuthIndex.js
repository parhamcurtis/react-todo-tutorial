import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

function AuthIndex(){
    return(
        <main className="auth-layout">
            <div className="poster">
                <Switch>
                    <Route exact path="/auth/login" component={Login} />
                    <Route exact path="/auth/signup" component={SignUp} />
                </Switch>
            </div>
        </main>
    );
}

export default AuthIndex;