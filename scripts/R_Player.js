export const Player = {
    // Health
    "Health": 300,     // starting & current health
    "Health_Max": 300, // health limit

    // Experience
    "Experience": 0,                     // starting & current XP
    "Experience_Target": 40,             // starting & next XP target
    "Experience_Target_Multiplier": 1.2, // experience target is multiplied by this value when leveling up

    // Movement
    "MovementSpeed": 70, // movement speed for the 8 Direction behaviour

    // Misc
    "PickupDistance": 30,         // starting / current drop pickup distance of the player
    "PickupDistanceMagnet": 1000, // picking up a magnet drop will vacuum experience drops within this distance from the player
    "LevelUpFreezeTime": 1,       // number of seconds while enemies stay frozen after player levels up

    // Bonuses
    "Bonus_Enemy_MovementSpeed_Multiplier": 1, // multiplier for enemy movement speeds
    "Bonus_Enemy_Spawn_Amount_Multiplier": 1,  // multiplier for enemy spawn amounts in cycles
    "Bonus_Experience_Multiplier": 1,          // multiplier for experience drop pickups
    "Bonus_Regeneration_Amount": 0,            // health points regenerated per second
    "Bonus_Healing_Multiplier": 1,             // multiplier for all healing (drops & regeneration)
    "Bonus_Weapon_Amount": 0,                  // extra amount of weapons to spawn during an attack
    "Bonus_Weapon_Damage_Multiplier": 1,       // multliplier for all weapon damage values
    "Bonus_Weapon_Cooldown_Multiplier": 1,     // multiplier for all weapon cooldown times
    "Bonus_Weapon_Size_Multiplier": 1,         // multiplier for all weapon sprite sizes
    "Bonus_Incoming_Damage_Multiplier": 1,      // multiplier for incoming damage
}