import React from 'react';

const Team = (props) => {
  const {idLeague,strLeague,strSport,strLeagueAlternate}=props.team;
   
    return (
        <div>
            <h1>idLeague:{idLeague}</h1>
            <p>strLeague:{strLeague}</p>
            <p>strSport:{strSport}</p>
            <p>strLeagueAlternate:{strLeagueAlternate}</p>
        </div>
    );
};

export default Team;