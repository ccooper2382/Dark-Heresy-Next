import React from 'react';

function CharacteristicTile({name, description}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );
}

export default CharacteristicTile;