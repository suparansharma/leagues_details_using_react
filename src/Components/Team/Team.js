import React from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowSquareRight} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
const Team = (props) => {
  const {idLeague,strLeague,strSport,strLeagueAlternate,strBadge}=props.team;
  const history = useHistory();

const showDetails = idLeague =>{

    const url = `post/${idLeague}`;
    history.push(url);
}
   
    return (



        
        <div className='homePageTeam'>

<Card style={{ width: '20rem',height:'30rem' }}>
  <Card.Img variant="top" src={strBadge} />
  <Card.Body>
    <Card.Title>{strLeague}</Card.Title>
    
    <Card.Text>{strLeagueAlternate}</Card.Text>
    <Button onClick={()=>showDetails(idLeague)} variant="primary"> Go somewhere</Button>
  </Card.Body>
</Card>
</div>
    );
};

export default Team;