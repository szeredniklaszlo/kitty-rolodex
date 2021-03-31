import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card'>
        <img alt='kitty' src={`https://robohash.org/${props.monster.id}?set=set4&size=200x200`} />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);