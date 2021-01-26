import React from 'react';
import {
  BrowserRouter as Router,
  Route} from 'react-router-dom';
import Login from './views/Login/index';

const App = () => {
  return (
    <Router>
      <Route exact path={'/'} component={Login}/>
    </Router>
  )
}

export default App;
