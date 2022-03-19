import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';

function MainNav(props){

    const [authStore, authDispatch] = useContext(AuthContext);
    const history = useHistory();
    function logout(){
        authDispatch({type: 'logout'});
        history.push('/auth/login');
    }

    return(
        <nav className="main-nav">
            <section className="left">
                <h2 className="brand">My Todos</h2> 
                <Link to="/">My Todos</Link>
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