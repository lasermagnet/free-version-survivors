const _example = {
    "": {
        "Health": 1,                // starting health
        "Damage": 1,                // damage per second while weapon is overlapping the player
        "Healing": 0,               // healing drop value
        "Experience": 10,           // experience drop value
        "MovementSpeed": 0,         // movement speed
        "MovementAngle": null,      // if specified, enemy will move in this angle; -1 value is not supported
        "Scale": 1,                 // sprite size multiplier (defaults to 1 when unset or null)
        "Animation": "Beholder",    // override default animation name (which is the enemy's name)
        "ItemSpawnDisabled": false, // containers don't spawn items (only drops)
    }
}

export const Enemies = {
    "HealingCrate": {
        "Health": 3,
        "Healing": 100,
        "ItemSpawnDisabled": true,
    },
    "MagnetCrate": {
        "Health": 3,
        "ItemSpawnDisabled": true,
    },
    "Slime": {
        "Health": 3,
        "Damage": 10,
        "Experience": 4,
        "MovementSpeed": 0.5,
    },
    "Slime_Boss": {
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
        "Scale": 0.5,
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
        "MovementSpeed": 1.7,
    },
    "Beholder": {
        "Health": 500,
        "Damage": 70,
        "Experience": 320,
        "MovementSpeed": 1.8,
    },
    "Beholder_Boss": {
        "Health": 1000,
        "Damage": 200,
        "Experience": 700,
        "MovementSpeed": 2.5,
        "Scale": 3,
        "Animation": "Beholder",
    }
}