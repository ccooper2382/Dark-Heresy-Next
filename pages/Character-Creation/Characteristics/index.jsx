import React from 'react';
import {getCharacteristics} from "../../../public/characteristics-data";
import CharacteristicList from "./Characteristic-List";

function Index() {
    const characteristics = getCharacteristics();

    return (
<div>
        <h1>Characteristics</h1>
        <CharacteristicList items={characteristics}/>
</div>
    );
}

export default Index;