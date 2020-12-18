import React from 'react';
import Home from './Component/Home/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
