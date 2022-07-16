import React from 'react';
import SkillsList from "./Skills-List";
import {getSkills} from "../../../public/skills";

function Index() {
    const skills = getSkills()
    return (
        <div>
            <SkillsList items={skills}/>
        </div>
    );
}

export default Index;