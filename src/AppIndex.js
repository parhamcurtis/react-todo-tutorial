import React, {useEffect, useContext} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import MainNav from './components/MainNav';
import {AuthContext} from './contexts/AuthContext';
import { TodoContext } from './contexts/TodoContext';
import Todos from './components/todos/Todos';
import { jsonGet } from './helpers/Ajax';

function AppIndex(){

    const history = useHistory();
    const [authStore, authDispatch] = useContext(AuthContext);
    const [todoStore, todoDispatch] = useContext(TodoContext);

    useEffect(() => {
        authCheck();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function authCheck(){
        await authDispatch({type: 'isLoggeedIn'});
        if(!authStore.loggedIn) {
            history.push('/auth/login');
        } else {
            hydrate();
        }
        return authStore.loggedIn;
    }

    async function hydrate(){
        const resp = await jsonGet('todos');
        if(resp.success) {
            todoDispatch({type:'setTodos', payload: {todos: resp.data, total: resp.total}});
        }
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