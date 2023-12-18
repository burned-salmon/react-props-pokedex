import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex(props) {
    return (
        <div classname="Pokedex">
            <div className="Pokedex-Pokecards">
                {props.pokemon.map(p => (
                    <Pokecard
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>
        </div>
    );
}

Pokedex.defaultProps = {
    pokemon: [
        { id: 129, name: "Magikarp", type: "water", base_experience: 20 },
        { id: 201, name: "Unown", type: "psychic", base_experience: 118 },
        { id: 242, name: "Blissey", type: "normal", base_experience: 608 },
        { id: 746, name: "Wishiwashi", type: "water", base_experience: 61 },
        { id: 789, name: "Cosmog", type: "psychic", base_experience: 40 },
        { id: 998, name: "Baxcalibur", type: "dragon/ice", base_experience: 300 },
        { id: 1000, name: "Gholdengo", type: "steel/ghost", base_experience: 275 },
        { id: 1017, name: "Ogerpon", type: "grass", base_experience: 275 }
    ]
}

export default Pokedex;
