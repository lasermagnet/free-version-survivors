const _example = {
    "": {
        "Container": 0, // containers don't spawn items (only drops)
        "Health": 1, // starting health
        "Damage": 0, // damage per second while weapon is overlapping the player
        "Healing": 0, // healing drop value
        "Experience": 0, // experience drop value
        "MovementSpeed": 0, // movement speed
        "MovementAngle": null, // if specified, enemy will move in this angle; -1 value is not supported
    }
}

export const Enemies = {
    "HealingCrate": {
        "Container": 1,
        "Health": 3,
        "Healing": 100,
    },
    "MagnetCrate": {
        "Container": 1,
        "Health": 3,
    },
    "Slime": {
        "Health": 3,
        "Damage": 10,
        "Experience": 4,
        "MovementSpeed": 0.5,
    },
    "SlimeBig": {
        "Health": 50,
        "Damage": 20,
        "Experience": 50,
        "MovementSpeed": 0.7,
        "Scale": 3,
    },
    "Rat": {
        "Health": 5,
        "Damage": 15,
        "Experience": 9,
        "MovementSpeed": 0.8,
    },
    "Crab": {
        "Health": 10,
        "Damage": 20,
        "Experience": 14,
        "MovementSpeed": 0.9,
    },
    "Snake": {
        "Health": 15,
        "Damage": 25,
        "Experience": 19,
        "MovementSpeed": 1,
    },
    "Werewolf": {
        "Health": 20,
        "Damage": 30,
        "Experience": 30,
        "MovementSpeed": 1.1,
    },
    "Ent": {
        "Health": 50,
        "Damage": 35,
        "Experience": 50,
        "MovementSpeed": 0.5,
    },
    "Tentacle": {
        "Health": 70,
        "Damage": 40,
        "Experience": 80,
        "MovementSpeed": 1.2,
    },
    "Dwarf": {
        "Health": 80,
        "Damage": 45,
        "Experience": 90,
        "MovementSpeed": 0.8,
    },
    "Golem": {
        "Health": 100,
        "Damage": 50,
        "Experience": 120,
        "MovementSpeed": 1.5,
    },
    "Ogre": {
        "Health": 150,
        "Damage": 55,
        "Experience": 180,
        "MovementSpeed": 1.5,
    },
    "Cultist": {
        "Health": 200,
        "Damage": 60,
        "Experience": 250,
        "MovementSpeed": 2,
    },
    "Beholder": {
        "Health": 500,
        "Damage": 70,
        "Experience": 320,
        "MovementSpeed": 2,
    }
}