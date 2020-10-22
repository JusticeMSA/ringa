import React from 'react';
import './App.css';

//React router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import Components
import Register from './components/register/Register';
import Login from './components/login/Login';

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
