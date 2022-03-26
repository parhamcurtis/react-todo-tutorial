import React, {useEffect, useContext} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import MainNav from './components/MainNav';
import {AuthContext} from './contexts/AuthContext';
import Todos from './components/todos/Todos';

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
                <Switch>
                    <Route path="/" component={Todos} />    
                </Switch>                
            </div>
            
        </main>
    );
}

export default AppIndex;