export const rules = {

    "Player": { // Player rules
        "Health": 100,
        "Health_Max": 100,
        "Experience_Target": 40,
        "Experience_Target_Multiplier": 1.2,
        "MovementAcceleration": 2000,
        "MovementDeceleration": 2000,
        "MovementSpeed": 60
    },

    "Queues": {
        "Items": ["Sword"],
        "Enemies": 10
    },

    "Wave": { // Wave rules
        "Items": { // Item spawning
            // todo visualize item cooldown
            "Cooldown": 5
        },
        "Enemies": { // Enemy spawning
            "Cooldown": 3,
            "Amount": 20,
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
            "Icon": "HeartRed",
            "Rule_Value": "Player.Health",
            "Rule_Max": "Player.Health_Max",
            "Multiply": 1,
            "Add": 20
        },
        "MaxHealth": {
            "Label": "Increase max health",
            "Icon": "HeartBlack",
            "Rule_Value": "Player.Health_Max",
            "Multiply": 1.1,
            "Add": 0
        },
        "MovementSpeed": {
            "Label": "Increase movement speed",
            "Icon": "GoldArrowRight",
            "Rule_Value": "Player.MovementSpeed",
            "Multiply": 1,
            "Add": 10
        },
    },

    "Enemies": { // Enemy rules
        "Slime": {
            "Health": 3,
            "Damage": 25,
            "Experience": 4,
            "MovementSpeed": 0.5
        },
        "Rat": {
            "Health": 5,
            "Damage": 50,
            "Experience": 9,
            "MovementSpeed": 1
        },
        "Crab": {
            "Health": 5,
            "Damage": 50,
            "Experience": 9,
            "MovementSpeed": 2
        },
        "Snake": {
            "Health": 5,
            "Damage": 50,
            "Experience": 9,
            "MovementSpeed": 2
        },
        "Werewolf": {
            "Health": 5,
            "Damage": 50,
            "Experience": 9,
            "MovementSpeed": 2
        },
        "Ent": {
            "Health": 5,
            "Damage": 50,
            "Experience": 9,
            "MovementSpeed": 2
        },
        "Tentacle": {
            "Health": 5,
            "Damage": 50,
            "Experience": 9,
            "MovementSpeed": 2
        },
        "Golem": {
            "Health": 5,
            "Damage": 50,
            "Experience": 9,
            "MovementSpeed": 2
        },
        "Dwarf": {
            "Health": 5,
            "Damage": 50,
            "Experience": 9,
            "MovementSpeed": 2
        },
        "Ogre": {
            "Health": 5,
            "Damage": 50,
            "Experience": 9,
            "MovementSpeed": 2
        },
        "Cultist": {
            "Health": 5,
            "Damage": 50,
            "Experience": 9,
            "MovementSpeed": 2
        },
        "Beholder": {
            "Health": 5,
            "Damage": 50,
            "Experience": 9,
            "MovementSpeed": 2
        }
    },

    "Weapons": { // Weapon rules
        "Sword": {
            //todo: animation name, "movement type"...
            "Cooldown": 1,
            "Amount": 4,
            "Damage": 10,
            "PierceLimit": 10,
            "Scale": 1
        }
        // todo more weapons
    },

    "Items": {
        "Sword": {
            "Rule_Value": "Weapons.Sword.Amount",
            "Add": 1
        }
    }

}

/*

# todo
- audio
- waves (with string names/labels)
- enemy types: advanced spawning, damage and xp drop amounts
- more weapons
- show upgrade change amounts on level up ui
- stat upgrades: player speed, player max health, pickup distance
- weapon upgrades: level, cooldown
- game over screen

# maybe
- restructure weapons so their behaviours are modifiable (not just properties)

*/

