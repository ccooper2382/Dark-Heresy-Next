const skills = [
    {
        "name": "Acrobatics",
        "type": "Advanced",
        "characteristic": "Agility",
        "descriptor": "Movement",
        "description": "<p>The Acrobatics skill encompasses " +
            "a variety of movement techniques " +
            "unavailable to less flexible Acolytes. From " +
            "performing somersaults to tumbling, " +
            "from flipping through the air to daring " +
            "leaps and jumps, this Skill expands your " +
            "movement options</p> " +
            "<p>Use this Skill to perform some " +
            "spectacular feat of derring-do. The " +
            "Difficulty depends on the desired action. " +
            "The more complicated the manoeuvre, " +
            "such as somersaulting over a group of " +
            "enraged cultists to grab the skids of a " +
            "Vulture as it takes off, the harder the " +
            "difficulty. The more degrees of success you " +
            "attain, the more impressive the result.</p>" +
            "<p>There are two special rules associated " +
            "with this Skill:</p>" +
            "<p><strong>Disengage:</strong>You may make an Acrobatics " +
            "Test when attempting a Disengage Action " +
            "to reduce it to a Half Action.</p>" +
            "<p><strong>Jumping & Leaping:</strong> You may " +
            "substitute an Acrobatics Test for an " +
            "Agility Test when Jumping or Strength " +
            "Tests when Leaping.</p>" +
            "<p>An Acrobatics Test is typically a Full " +
            "Action.</p>"
    },
    {
        "name": "Awareness",
        "type": "Basic",
        "characteristic": "Perception",
        "descriptor": "",
        "description": "<p>The Awareness skill reflects your " +
            "ability to perceive hidden dangers " +
            "and to notice small details about your " +
            "physical surroundings. You use the " +
            "Awareness skill to notice ambushes, " +
            "spot traps and discern other threats to " +
            "you and your allies. Awareness is not " +
            "tied to any one sense; it encompasses " +
            "them all.</p>" +
            "<p>When using Awareness to detect" +
            "a hidden enemy, the Test is always" +
            "Opposed. Otherwise, the thing you are" +
            "trying to detect applies a Difficulty based " +
            "on how cunningly concealed it is.</p>" +
            "<p>An Awareness Test is usually a Free " +
            "Action made in reaction to something</p>"
    }

]

export function getSkills() {
    return skills;
}
/*
{
    "name": "",
    "type": "",
    "characteristic": "",
    "descriptor": "",
    "description": ""
}
*/

