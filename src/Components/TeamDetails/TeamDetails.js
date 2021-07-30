import React from 'react';
import { useParams } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import All from '../All/All';

const TeamDetails = () => {

    const {idLeague,strTeamBadge,strTeam,strLeagueAlternate} =useParams();
    const[details,setDetails] = useState([]);
    
    useEffect(()=>{
        // const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${idLeague}`;

        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
       .then(data =>setDetails(data.leagues))
        // .then(data =>console.log(data.teams))

    },[])

   
    return (
        <div>

{/* <Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>{strLeagueAlternate.details}</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}

 
{ 

details.map(dtl=><All detail={dtl} ></All>)

}

        </div>
    );
};

export default TeamDetails;