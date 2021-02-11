import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import dark from './styles/dark';
import light from  './styles/light';
import {
  BrowserRouter as Router,
  Route} from 'react-router-dom';
import Login from './views/Login/index';
import DashboardMain from './views/DashboardMain';

const App = () => {
  return (
    <ThemeProvider theme={dark}>
    <Router>
      <GlobalStyle/>
      <Route exact path={'/'} component={Login}/>
      <Route path={'/main'} component={DashboardMain}/>
    </Router>
    </ThemeProvider>
  )
}

export default App;
