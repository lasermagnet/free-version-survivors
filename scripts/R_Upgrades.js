export const Upgrades = {
    "EnemySpawnCooldown": {
        "Label": "More enemies",
        "Description": "Reduce enemy spawn cooldown by 5%.",
        "Icon": "Enemy",
        "Rule_Value": "Player.Bonus_Enemy_Spawn_Cooldown_Multiplier",
        "Multiply": 1,
        "Add": -0.05,
    },
    "ExperienceBonus": {
        "Label": "More XP gain",
        "Description": "XP drops worth 10% more.",
        "Icon": "Experience",
        "Rule_Value": "Player.Bonus_Experience_Multiplier",
        "Multiply": 1,
        "Add": 0.1
    },
    "Heal1": {
        "Label": "Minor healing",
        "Description": "Heal 30 points.",
        "Icon": "HeartRed",
        "Rule_Value": "Player.Health",
        "Rule_Max": "Player.Health_Max",
        "Multiply": 1,
        "Add": 30
    },
    "Heal2": {
        "Label": "Major healing",
        "Description": "Heal 100 points.",
        "Icon": "HeartRed",
        "Rule_Value": "Player.Health",
        "Rule_Max": "Player.Health_Max",
        "Multiply": 1,
        "Add": 100
    },
    "ItemSpawnCooldown": {
        "Label": "More items",
        "Description": "Reduce item spawn cooldown by 5%.",
        "Icon": "Item",
        "Rule_Value": "Player.Bonus_Item_Spawn_Cooldown_Multiplier",
        "Multiply": 1,
        "Add": -0.05,
    },
    "MaxHealth": {
        "Label": "Max health up",
        "Description": "By 10%, healing not included.",
        "Icon": "HeartBlack",
        "Rule_Value": "Player.Health_Max",
        "Multiply": 1.1,
        "Add": 0
    },
    "MovementSpeed": {
        "Label": "Speed up",
        "Description": "Increase movement speed slightly.",
        "Icon": "GoldArrowRight",
        "Rule_Value": "Player.MovementSpeed",
        "Multiply": 1,
        "Add": 5
    },
    "PickupDistance": {
        "Label": "Pickup power up",
        "Description": "Attract drops from further.",
        "Icon": "Experience",
        "Rule_Value": "Player.PickupDistance",
        "Multiply": 1,
        "Add": 10
    },
    "WeaponDamage": {
        "Label": "Damage up",
        "Description": "Deal 10% more damage.",
        "Icon": "WeaponDamage",
        "Rule_Value": "Player.Bonus_Weapon_Damage_Multiplier",
        "Multiply": 1,
        "Add": 0.1,
    },
    "WeaponCooldown": {
        "Label": "Attack faster",
        "Description": "Reduce all weapon cooldowns by 10%.",
        "Icon": "WeaponCooldown",
        "Rule_Value": "Player.Bonus_Weapon_Cooldown_Multiplier",
        "Multiply": 1,
        "Add": -0.1,
    },
    "WeaponSize": {
        "Label": "Bigger weapons",
        "Description": "Scale up all weapons.",
        "Icon": "WeaponSize",
        "Rule_Value": "Player.Bonus_Weapon_Size_Multiplier",
        "Multiply": 1,
        "Add": 0.15,
    },
    "Sword": {
        "Label": "+1 Sword",
        "Description": "Throw one more sword.",
        "Icon": "WeaponAmount",
        "Rule_Value": "Player.Bonus_Weapon_Amount_Add",
        "Multiply": 1,
        "Add": 1,
    },
}