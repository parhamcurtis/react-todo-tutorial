import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AppIndex from './AppIndex';
import AuthIndex from './components/auth/AuthIndex';
import ContextProvider from './contexts/ContextProvider';

function App() {
  
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route path="/auth/" component={AuthIndex} />
          <Route path="/" component={AppIndex} />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
