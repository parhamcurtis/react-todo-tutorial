import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';
import {TodoContext} from '../contexts/TodoContext';
import {useAlert} from 'react-alert';

function MainNav(props){

    const [authStore, authDispatch] = useContext(AuthContext);
    const [todoStore] = useContext(TodoContext);
    const history = useHistory();
    const alert = useAlert();
    
    function logout(){
        authDispatch({type: 'logout'});
        history.push('/auth/login');
        alert.show("You have been successfully logged out!", {timeout:6000});
    }

    return(
        <nav className="main-nav">
            <section className="left">
                <h2 className="brand">My Todos</h2> 
                <Link to="/">My Todos ({todoStore.incomplete})</Link>
                <Link to="contacts">My Contacts</Link>
            </section>

            <section className="right">
                <div className="greeting">Hi {authStore.user?.fname || ""}</div>
                <button className="right" onClick={logout}>Log Out</button>
            </section>
        </nav>
    );
}

export default MainNav;