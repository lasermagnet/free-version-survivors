const _example = {
    "": {
        // starting health
        "Health": 1,

        // damage per second while weapon is overlapping the player
        "Damage": 1,

        // healing drop value (for crates spawning health drops)
        "Healing": 0,

        // experience drop value
        "Experience": 10,

        // movement speed (0 = enemy is stationary, eg. crates)
        "MovementSpeed": 0,

        // if specified, enemy will move in this angle; -1 value is not supported
        "MovementAngle": null,

        // physics density (defaults to 1 when unset or null)
        "Density": 1,

        // sprite size multiplier (defaults to 1 when unset or null)
        "Scale": 1,

        // (optional) custom animation name (by the default it's the enemy's name)
        "Animation": "Beholder",

        // whether the enemy can spawn an item (so containers don't spawn items, only drops)
        "ItemSpawnDisabled": false,
    }
}

export const Enemies = {
    "HealingCrate": {
        "Health": 5,
        "Healing": 50,
        "ItemSpawnDisabled": true,
    },
    "MagnetCrate": {
        "Health": 5,
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
        "Scale": 2.5,
    },
    "Rat": {
        "Health": 7,
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
        "Scale": 2,
    },
    "Tentacle": {
        "Health": 70,
        "Damage": 40,
        "Experience": 80,
        "MovementSpeed": 1.2,
        "Scale": 1.5,
    },
    "Dwarf": {
        "Health": 80,
        "Damage": 45,
        "Experience": 90,
        "MovementSpeed": 0.8,
        "Scale": 1.3,
    },
    "Golem": {
        "Health": 100,
        "Damage": 50,
        "Experience": 120,
        "MovementSpeed": 1.5,
        "Scale": 1.7,
    },
    "Ogre": {
        "Health": 150,
        "Damage": 55,
        "Experience": 180,
        "MovementSpeed": 1.5,
        "Scale": 2.5,
        "Density": 10,
    },
    "Cultist": {
        "Health": 200,
        "Damage": 60,
        "Experience": 250,
        "MovementSpeed": 2.5,
        "Scale": 2,
        "Density": 10,
    },
    "Beholder": {
        "Health": 500,
        "Damage": 70,
        "Experience": 320,
        "MovementSpeed": 2.2,
        "Scale": 1.4,
    },
    "Beholder_Boss": {
        "Health": 1000,
        "Damage": 200,
        "Experience": 700,
        "MovementSpeed": 2.5,
        "Scale": 3,
        "Animation": "Beholder",
        "Density": 10,
    }
}