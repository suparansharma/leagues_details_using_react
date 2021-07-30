import React from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import male from '../../images/male.png';
import female from '../../images/female.png';


const All = (props) => {

    const {strLeague, intFormedYear,strLeagueAlternate,strGender}=props.detail;

    let imgSrc =``;
    if (strGender === "Male") {
        imgSrc = male;
    }
    else {
        imgSrc = female;
    }
    return (
        <div>
            <img src={imgSrc} alt="" />
          <Card>
  
  <Card.Body>
    <Card.Title>{strLeagueAlternate}</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

        </div>
    );
};

export default All;