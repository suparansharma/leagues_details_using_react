import React from 'react';
import {CardGroup} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './Team.css';
const Team = (props) => {
  const {idLeague,strLeague,strSport,strLeagueAlternate,strBadge}=props.team;


   
    return (



        
        <div className='homePageTeam'>

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={strBadge} />
  <Card.Body>
    <Card.Title>{strLeague}</Card.Title>
    
    <Card.Text>{strLeagueAlternate}</Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
    );
};

export default Team;