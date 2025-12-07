export const rules = {

    "Player": { // Player rules
        "Health": 100,
        "Health_Max": 100,
        "Experience_Target": 40,
        "Experience_Target_Multiplier": 1.15,
        "MovementAcceleration": 2000,
        "MovementDeceleration": 2000,
        "MovementSpeed": 60
    },

    "Wave": { // Wave rules
        "Items": { // Item spawning
            "Cooldown": 10
        },
        "Enemies": { // Enemy spawning
            "Cooldown": 2,
            "Amount": 10,
        },
    },

    "Pools": {
        "Upgrades": [
            [1, "Heal1"],
            [1, "MaxHealth"],
            [1, "MovementSpeed"],
            /*
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
            "Rule_Value": "Player.Health",
            "Rule_Max": "Player.Health_Max",
            "Multiply": 1,
            "Add": 20
        },
        "MaxHealth": {
            "Label": "Increase max health",
            "Rule_Value": "Player.Health_Max",
            "Multiply": 1.1,
            "Add": 0
        },
        "MovementSpeed": {
            "Label": "Increase movement speed",
            "Rule_Value": "Player.Health_Max",
            "Multiply": 1.1,
            "Add": 0
        },
    },

    "Enemies": { // Enemy rules

        // todo: Slime Rat Crab Snake Werewolf Ent Ghost Tentacle Golem Dwarf Ogre Cultist Beholder
        "Slime": {
            "Health": 3,
            "Damage": 25,
            "Experience": 4,
            "Speed": 1
        },
        "Rat": {
            "Health": 5,
            "Damage": 50,
            "Experience": 9,
            "Speed": 2
        }
    },

    "Weapons": { // Weapon rules
        "Sword": {
            //todo: animation name, "movement type"
            // todo: use player direction
            "Cooldown": 1,
            "Level": 2,
            "Damage": 10,
            "PierceLimit": 3
        }
        // todo more weapons
    }

}

/*

# todo
[ ] waves (with string names/labels)
[ ] enemy types: advanced spawning, damage and xp drop amounts
[ ] damage numbers
[ ] more weapons
[ ] show upgrade change amounts on level up ui
[ ] stat upgrades: player speed, player max health, pickup distance
[ ] weapon upgrades: level, cooldown
[ ] game over screen

*/

