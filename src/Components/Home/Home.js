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

      <div className="main">
 <div className="homePageImage"  >
                <img className="card-img-top" style={{height:'400px'}} src="https://www.thesportsdb.com/images/media/team/stadium/w1anwa1588432105.jpg" alt="" />
                <h1 className="text-image">All Star League</h1>
            </div>

        <div className='homePageTeam'
        //  style={{ 
        //     display: 'grid',
        //     gridTemplateColumns: 'repeat(3, 1fr)',
        //     gridGap: '30px',
        //     border: '1px solid lightgray',
        //     }}
            
            >
            
            {
                teams.map(tm=><Team

                     team={tm}>

                     </Team>)
                 
            }
           
            
        </div>

      </div>

         
    );
};

export default Home;