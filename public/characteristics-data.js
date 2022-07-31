const characteristics =
    [
        {
            name: "Weapon Skill",
            abbreviation: "WS",
            description: "Weapon Skill measures your character’s competence in hand-to-hand fighting, whether using fists, knives or chainswords."
        },
        {
            name: "Ballistic Skill (BS)",
            description: "Ballistic Skill reflects your character’s accuracy with ranged weapons, such as lasguns, crossbows and autopistols."
        },
        {
            name: "Strength (S)",
            description: "Strength describes how physically strong your character is."
        },
        {
            name: "Toughness (T)",
            description: "Toughness defines how easily you can shrug off injury as well as how easily you can resist toxins, poisonous environments, disease and other physical ailments."
        },
        {
            name: "Agility (Ag)",
            description: "Agility measures your character’s quickness, reflexes and poise."
        },
        {
            name: "Intelligence (Int)",
            description: "Intelligence is a measurement of your character’s acumen, reason and knowledge."
        },
        {
            name: "Perception (Per)",
            description: "Perception describes how well your character perceives his surroundings. It reflects the acuteness of senses."
        },
        {
            name: "Willpower (WP)",
            description: "Willpower demonstrates your character’s ability to withstand the horrors of war, the terrors of space and the awfulness he is bound to encounter in his missions."
        },
        {
            name: "Fellowship (Fel)",
            description: "Fellowship is your character’s ability to interact with other creatures, to deceive, charm or befriend."
        }
    ];

export function getCharacteristics() {
    return characteristics;
}

export function getStatByName(name) {
    return characteristics.find((stat) => stat.name === name);
}