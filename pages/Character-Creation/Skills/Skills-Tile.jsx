import React from 'react';

function SkillsTile({name, type, characteristic, descriptor, description}) {

    let descriptiveVariableName = '';

    if (descriptor) {
        descriptiveVariableName = type + "," + descriptor;
    } else {
        descriptiveVariableName = type;
    }
    return (
        <div>
            <h1>{name}</h1>
            <h1>({descriptiveVariableName})</h1>
            <h2>{characteristic}</h2>
            <div dangerouslySetInnerHTML={{__html: description}} />
        </div>
    );
}

export default SkillsTile;