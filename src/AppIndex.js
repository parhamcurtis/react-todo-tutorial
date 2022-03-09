import React from 'react';
import MainNav from './components/MainNav';
import Button from './components/elements/Button';

function AppIndex(){
    return(
        <main className="app">
            <MainNav />
            <div className="main-content">
               <Button variant="primary" onClick={() => window.alert("Button Clicked")}>
                   Button One
                </Button>
                <Button variant="secondary">
                   Button One
                </Button>
                <Button variant="primary-alt">
                   Button One
                </Button>
                <Button variant="danger">
                   Button One
                </Button>

                <Button>
                    No props
                </Button>
               
            </div>
            
        </main>
    );
}

export default AppIndex;