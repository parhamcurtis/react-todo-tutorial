import React, {useEffect, useContext} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import MainNav from './components/MainNav';
import {AuthContext} from './contexts/AuthContext';
import { TodoContext } from './contexts/TodoContext';
import Todos from './components/todos/Todos';
import Contacts from './components/contacts/Contacts';
import ContactForm from './components/contacts/ContactForm';
import { jsonGet } from './helpers/Ajax';
import {ContactContext} from './contexts/ContactContext';

function AppIndex(){

    const history = useHistory();
    const [authStore, authDispatch] = useContext(AuthContext);
    const [, todoDispatch] = useContext(TodoContext);
    const [, contactDispatch] = useContext(ContactContext);

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
        const contactResp = await jsonGet('contacts');
        if(contactResp.success) {
            contactDispatch({type:'setContacts', payload:{contacts: contactResp.data, total: contactResp.total}});
        }
    }


    return(
        <main className="app">
            <MainNav />
            <div className="main-content">
                <Switch>
                    <Route path="/contacts/:id" component={ContactForm} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/" component={Todos} />    
                </Switch>                
            </div>
            
        </main>
    );
}

export default AppIndex;