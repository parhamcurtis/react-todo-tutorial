import React from 'react';
import {Link, useHistory} from 'react-router-dom';

function MainNav(props){
    return(
        <nav className="main-nav">
            <section className="left">
                <h2 className="brand">My Todos</h2> 
                <Link to="/">My Todos</Link>
                <Link to="contacts">My Contacts</Link>
            </section>

            <section className="right">
                <div className="greeting">Hi Curtis</div>
                <button className="right" onClick={()=> window.alert("Log Out")}>Log Out</button>
            </section>
        </nav>
    );
}

export default MainNav;