import React from 'react';
import '../card/card.style.css'
function Card (props){

    return (<div className="card-container">
    <img src ={`https://robohash.org/${props.monster.id}?set=set1 &size=150x150`} alt="monster" />
      <h2>{props.monster.name}</h2>
      <h3>{props.monster.email}</h3>
    </div>);
}

export default Card;
