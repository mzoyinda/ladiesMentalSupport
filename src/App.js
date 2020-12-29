import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import Home from './Component/Home/index';
import NgoLink from './Component/NgoLink/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home/>
        </Route>
        <Route exact path='/ngolink'>
            <NgoLink/>
          </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
