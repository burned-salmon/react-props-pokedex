import React from 'react';
import './Pokecard.css';

function Pokecard(props) {
    const icon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
    return (
        <div className="Pokecard">
            <h3 className="Pokecard-name">{props.name}</h3>
            <img className="Pokecard-icon" src={icon} alt={props.name}></img>
            <p className="Pokecard-extra">Type: {props.type}</p>
            <p className="Pokecard-extra">EXP: {props.exp}</p>
        </div>
    );
}

export default Pokecard;
