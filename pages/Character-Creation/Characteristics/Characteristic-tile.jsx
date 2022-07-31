import React from 'react';

function CharacteristicTile({name, abbreviation, description}) {
    return (
        <div>
            <h1>{name} ({abbreviation})</h1>
            <p>{description}</p>
        </div>
    );
}

export default CharacteristicTile;