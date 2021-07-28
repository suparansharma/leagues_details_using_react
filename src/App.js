import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetails from './Components/TeamDetails/TeamDetails';


function App() {
  return (
    <div className="App" >

<Router>
     
   
        <Switch>
       
          <Route path="/">
            <Home />
          </Route>

          
          <Route path="/post/:idLeague">
            <TeamDetails></TeamDetails>
          </Route>

          
        </Switch>
      
    </Router>

     
    </div>
  );
}

export default App;
