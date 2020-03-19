import React from 'react';
import './card.styles.css'

export const Card = ({ monster }) => (
    <div className="card-container">
        <img alt="monster" src={`http://robohash.org/${monster.id}&size=180x180`}></img>
        <h2 key={monster.id}>{monster.name}</h2>
    </div>
)