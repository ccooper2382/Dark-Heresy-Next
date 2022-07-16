import React from 'react';

function SkillsTile({name, type, characteristic, descriptor, description}) {
    return (
        <div>
            <h1>{name}</h1>
            <h1>({type},{descriptor})</h1>
            <h2>{characteristic}</h2>
            <div>
                {description}
            </div>
        </div>
    );
}

export default SkillsTile;