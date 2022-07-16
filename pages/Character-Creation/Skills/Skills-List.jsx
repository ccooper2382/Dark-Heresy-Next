import React from 'react';
import SkillsTile from "./Skills-Tile";

function SkillsList({items}) {
    return (
        <div>
            {items.map(skill =>
                <SkillsTile key={skill.name}
                            name={skill.name}
                            type={skill.type}
                            characteristic={skill.characteristic}
                            descriptor={skill.descriptor}
                            description={skill.description}/>)}
        </div>
    );
}

export default SkillsList;