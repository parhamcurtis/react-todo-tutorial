import React, {useEffect, useContext} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import MainNav from './components/MainNav';
import {AuthContext} from './contexts/AuthContext';

function AppIndex(){

    const history = useHistory();
    const [authStore, authDispatch] = useContext(AuthContext);

    useEffect(() => {
        authCheck();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function authCheck(){
        await authDispatch({type: 'isLoggeedIn'});
        if(!authStore.loggedIn) {
            history.push('/auth/login');
        }
        return authStore.loggedIn;
    }


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