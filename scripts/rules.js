const rules = {

    "Player": { // Player rules
        "Health": 100,
        "Health_Max": 100,
        "Health_Max_Multiplier": 1.05,
        "Experience_Target": 40,
        "Experience_Target_Multiplier": 1.15
    },

    // todo waves (with string names/labels)

    "Wave": { // Wave rules

        "Items": { // Item spawning
            "Cooldown": 10
        },

        "Enemies": { // Enemy spawning
            "Cooldown": 1,
            "Amount": 10,
        },

    },

    "Pools": {
        "Upgrades": [
            [1, "Heal1"],
            [1, "MaxHealth"],
            /*
[1, "MoveSpeed"],
[1, "WeaponLevelUpRandom"],
[1, "WeaponLevelUpAll"],
*/
        ],

        "Enemies": [
            [4, "Slime"],
            [1, "Rat"],
        ]
    },

    "Upgrades": {
        "Heal1": {
            "Label": "Minor healing",
            "Rule": "Player.Health",
            "Multiply": 1,
            "Add": 20
        },
        "MaxHealth": {
            "Label": "Increase max health",
            "Rule": "Player.Health_Max",
            "Multiply": 2,
            "Add": 0
        }
    },

    "Enemies": { // Enemy rules

        // todo: Slime Rat Crab Snake Werewolf Ent Ghost Tentacle Golem Dwarf Ogre Cultist Beholder
        "Slime": {
            "Health": 1,
            "Damage": 5,
            "Experience": 50,
            "Speed": 1
        },
        "Rat": {
            "Health": 1,
            "Damage": 10,
            "Experience": 50,
            "Speed": 2
        }
    },

    "Weapons": { // Weapon rules
        "Sword": {
            "Cooldown": 1,
            "Level": 5,
            "Damage": 10,
            "Pierce": 2 // todo
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