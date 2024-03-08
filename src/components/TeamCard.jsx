import React from 'react';
import styles from './TeamCard.module.css';

function TeamCard({school, name, city, state}) {
    return (
        <div className={styles.CardBody}>
            <h2>Name: {school}</h2>
            <p>Mascot: {name}</p>
            <p>Location: {city}, {state}</p>
        </div>
    );
}

export default TeamCard;
