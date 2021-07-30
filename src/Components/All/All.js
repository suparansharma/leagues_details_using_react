import React from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import male from '../../images/male.png';
import female from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import './All.css';



const All = (props) => {

    const {strLeague, intFormedYear,strLeagueAlternate,strGender,strCountry,strSport,strBanner,strDescriptionEN}=props.detail;

    let imgSrc =``;
    if (strGender === "Male") {
        imgSrc = male;
    }
    else {
        imgSrc = female;
    }
    return (
        <div>
          
          <div className="row">
                <img className="card-img-top" src={strBanner} alt="" />
            </div>
            <div  className="all">

            <div className="row m-4 legueDetailsHeader rounded ">
                <div id="first" className="col-md text-left p-5">
                    <h2>{strLeague}</h2>
                   
                    <p> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                    <p> <FontAwesomeIcon icon={faFutbol} /> Sport type: {strSport}</p>
                    <p> <FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>


                </div>
                <div id="second" className="col-md text-right p-5 image">
                    <img className="card-img-top" src={imgSrc} alt="image not found" />
                </div>
            </div>
            </div>
            
          
<div className="details">
<div className="row m-4  rounded">
                <div id="first" className="col-md text-left p-5">
                <div className="row m-3 p-2 text-left">
                <p>{strDescriptionEN}</p>
            </div>

                </div>
               
            </div>
</div>


            
        </div>
    );
};

export default All;