export const Upgrades = {
    "EnemySpawnCooldown": {
        "Label": "More enemy spawns",
        "Icon": "Enemy",
        "Rule_Value": "Player.Bonus_Enemy_Spawn_Cooldown_Multiplier",
        "Multiply": 1,
        "Add": -0.05,
    },
    "ExperienceBonus": {
        "Label": "XP gain multiplier",
        "Icon": "Experience",
        "Rule_Value": "Player.Bonus_Experience_Multiplier",
        "Multiply": 1,
        "Add": 0.1
    },
    "Heal1": {
        "Label": "Minor healing",
        "Icon": "HeartRed",
        "Rule_Value": "Player.Health",
        "Rule_Max": "Player.Health_Max",
        "Multiply": 1,
        "Add": 20
    },
    "ItemSpawnCooldown": {
        "Label": "More item Spawns",
        "Icon": "Item",
        "Rule_Value": "Player.Bonus_Item_Spawn_Cooldown_Multiplier",
        "Multiply": 1,
        "Add": -0.05,
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
    "PickupDistance": {
        "Label": "Pickup distance",
        "Icon": "Experience",
        "Rule_Value": "Player.PickupDistance",
        "Multiply": 1,
        "Add": 10
    },
    "WeaponDamage": {
        "Label": "More weapon damage",
        "Icon": "WeaponDamage",
        "Rule_Value": "Player.Bonus_Weapon_Damage_Multiplier",
        "Multiply": 1,
        "Add": 0.2,
    },
    "WeaponCooldown": {
        "Label": "Reduce all weapon cooldowns",
        "Icon": "WeaponCooldown",
        "Rule_Value": "Player.Bonus_Weapon_Cooldown_Multiplier",
        "Multiply": 1,
        "Add": -0.1,
    },
    "WeaponSize": {
        "Label": "Bigger weapons",
        "Icon": "WeaponSize",
        "Rule_Value": "Player.Bonus_Weapon_Size_Multiplier",
        "Multiply": 1,
        "Add": 0.4,
    },
    "WeaponAmount": {
        "Label": "Extra amount (all weapons)",
        "Icon": "WeaponAmount",
        "Rule_Value": "Player.Bonus_Weapon_Amount_Add",
        "Multiply": 1,
        "Add": 1,
    },
}