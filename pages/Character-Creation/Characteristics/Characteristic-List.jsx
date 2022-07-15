import React from 'react';
import CharacteristicTile from "./Characteristic-tile";


function CharacteristicList({items}) {

    return (
        <div>
            {items.map(characteristic =>
                <CharacteristicTile key = {characteristic.name}
                                    name={characteristic.name}
                                    description={characteristic.description}/>)}
        </div>
    );
}

export default CharacteristicList;