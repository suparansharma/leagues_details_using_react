import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetails from './Components/TeamDetails/TeamDetails';
import Team from './Components/Team/Team';


function App() {

  const [teams,setTeams] = useState([]);
  useEffect(()=>{

      fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer')
      .then(res=>res.json())
      .then(data=>setTeams(data.countrys))
      // .then(data=>console.log(data.countrys))
  },)
  return (
    <div className="just">

<div className="homePageImage"  >
                <img className="card-img-top" style={{height:'400px'}} src="https://www.thesportsdb.com/images/media/team/stadium/w1anwa1588432105.jpg" alt="" />
                <h1 className="text-image" style={{  }}>All Star League</h1>
            </div>

<div className="App" >
      

      <Router>
           
      
              <Switch>
             
              <Route exact path="/">
                 { teams.map(tm=><Team
      
                           team={tm}>
      
                           </Team>)}
                </Route>
      
                
                <Route path="/post/:idLeague">
                  <TeamDetails></TeamDetails>
                </Route>
      
                
              </Switch>
            
          </Router>
      
           
          </div>
    </div>
    
  );
}

export default App;
