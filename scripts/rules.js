const rules = {

    // Player rules
    "Player": {
        "Health": 100,
        "Health_Max": 100,
        "Health_Max_Multiplier": 1.05,
        "Experience_Target": 40,
        "Experience_Target_Multiplier": 1.15
    },

    // Spawn rules
    "Spawn": {

        // Item spawning
        "Items": {
            "Cooldown": 10
        },

        // Enemy spawning
        "Enemies": {
            "Cooldown": 2,
            "Amount": 20,
            "Pool": [
                [4, "Slime"],
                [1, "Rat"],
            ]
        }
    },

    // Enemy rules
    "Enemies": {

        // todo: Slime Rat Crab Snake Werewolf Ent Ghost Tentacle Golem Dwarf Ogre Cultist Beholder
        "Slime": {
            "Health": 1,
            "Damage": 1,
            "Experience": 1,
            "Speed": 1
        },
        "Rat": {
            "Health": 20,
            "Damage": 20,
            "Experience": 20,
            "Speed": 2
        }
    },

    // Weapon rules
    "Weapons": {
        "Sword": {
            "Cooldown": 1,
            "Level": 5,
            "Damage": 10
        }
    }
}

/*

# todo
[ ] enemy types: advanced spawning, damage and xp drop amounts
[ ] damage numbers
[ ] more weapons
[ ] stat upgrades: player speed, player max health, pickup distance
[ ] weapon upgrades: level, cooldown
[ ] player getting damaged & game over

*/