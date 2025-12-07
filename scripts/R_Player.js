export const Player = {
    // HP
    "Health": 500,
    "Health_Max": 500,
    
    // XP
    "Experience_Target": 40,
    "Experience_Target_Multiplier": 1.2,

    // Movement
    "MovementAcceleration": 2000,
    "MovementDeceleration": 2000,
    "MovementSpeed": 60,

    // Misc
    "PickupDistance": 30,

    // Enabled weapons (weapons not listed here will never fire)
    "Weapons": ["Revolver", "Sword", "Flame"], // todo remove, foreach weapons instead

    // Bonuses
    // todo heal bonus
    "Bonus_Experience_Multiplier": 1,
    "Bonus_Enemy_Spawn_Cooldown_Multiplier": 1,
    "Bonus_Weapon_Damage_Multiplier": 1,
    "Bonus_Weapon_Cooldown_Multiplier": 1,
    "Bonus_Weapon_Size_Multiplier": 1,
    "Bonus_Weapon_Amount_Extra": 0,
    "Bonus_Item_Spawn_Cooldown_Multiplier": 1,
}