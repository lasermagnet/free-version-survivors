export const Player = {
    // Health
    "Health": 300, // starting & current health
    "Health_Max": 300, // health limit

    // Experience
    "Experience": 0, // starting & current XP
    "Experience_Target": 40,
    "Experience_Target_Multiplier": 1.2,

    // Movement
    // todo remove acc & deacc?
    //"MovementAcceleration": 100,
    //"MovementDeceleration": 100,
    "MovementSpeed": 70, // movement speed for the 8 Direction behaviour

    // Misc
    "PickupDistance": 30,
    "PickupDistanceMagnet": 1000,
    "LevelUpFreezeTime": 1,

    // Bonuses
    // todo_maybe "Bonus" object with children, get rid of Bonus_?
    "Bonus_Enemy_Spawn_Amount_Multiplier": 2,
    "Bonus_Experience_Multiplier": 1,
    "Bonus_Healing_Multiplier": 1, // affects health drop pickups and regeneration too
    "Bonus_Regeneration_Amount": 0, // per second
    "Bonus_Weapon_Damage_Multiplier": 1,
    "Bonus_Weapon_Cooldown_Multiplier": 1,
    "Bonus_Weapon_Size_Multiplier": 1,
    "Bonus_Weapon_Amount_Extra": 0,
}