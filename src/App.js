
import './App.css';
import Navigation from './Component/Navigation/Navigation'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'
          render= {()=><Navigation/>}
          ></Route>
        </Switch>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
