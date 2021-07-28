import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

const Home = () => {

    const [teams,setTeams] = useState([]);
    useEffect(()=>{

        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer')
        .then(res=>res.json())
        .then(data=>setTeams(data.countrys))
        // .then(data=>console.log(data.countrys))
    },)

    return (

        <div>
            
            {
                teams.map(tm=><Team

                     team={tm}>

                     </Team>)
                 
            }
           
            
        </div>
    );
};

export default Home;