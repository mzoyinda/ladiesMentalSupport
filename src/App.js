import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import Home from './Component/Home/index';
import NgoLink from './Component/GetSupport/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import About from './Component/About/index';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home/>
        </Route>
        <Route exact path='/get-support'>
            <NgoLink/>
          </Route>
          <Route path='/aboutUs'>
            <About />
          </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
