const _example = {
    "": {
        "Modifiers": [],
        "Modifiers_Infinite": [],
    },
}

export const Upgrades = {
    "HealAll": {
        "Modifiers_Infinite": ["HealAll"],
    },

    // Weapons
    "Axe": {
        "Modifiers": ["Axe_Amount", "Axe_Damage", "Axe_PierceLimit"],
        "Modifiers_Infinite": ["Axe_Damage_Extra"],
    },
    "Flame": {
        "Modifiers": ["Flame_Amount", "Flame_Duration", "Flame_Amount", "Flame_Duration", "Flame_Amount", "Flame_Duration"],
        //"Modifiers_Infinite": [],
    },
    "Chainsaw": {
        "Modifiers": ["Chainsaw_Amount", "Chainsaw_Radius", "Chainsaw_Size", "Chainsaw_Speed", "Chainsaw_Amount", "Chainsaw_Radius", "Chainsaw_Amount", "Chainsaw_Size", "Chainsaw_Speed", "Chainsaw_Amount", "Chainsaw_Radius", "Chainsaw_Size"],
        //"Modifiers_Infinite": [],
    },
    "Spikes": {
        "Modifiers": ["Spikes_Amount", "Spikes_Area", "Spikes_Amount", "Spikes_Area", "Spikes_Amount", "Spikes_Area", "Spikes_Damage", "Spikes_Damage"],
        "Modifiers_Infinite": ["Spikes_Damage_Extra"],
    },

    // Player stats
    // todo_maybe number based usage limit for "simple" upgrades? or group them together?
    "EnemySpawnAmount": {
        "Modifiers_Infinite": ["EnemySpawnAmount"]
    },
    "Regeneration": {
        "Modifiers": ["Regeneration", "Regeneration", "Regeneration", "Regeneration"],
    },
    "MaxHealth": {
        "Modifiers": ["MaxHealth", "MaxHealth", "MaxHealth", "MaxHealth"],
        //"Modifiers_Infinite": [],
    },
    "HealingBonus": {
        "Modifiers": ["HealingBonus", "HealingBonus", "HealingBonus", "HealingBonus"],
    },
    "ExperienceBonus": {
        "Modifiers_Infinite": ["ExperienceBonus"],
    },
    "MovementSpeed": {
        "Modifiers": ["MovementSpeed", "MovementSpeed", "MovementSpeed", "MovementSpeed"],
    },
    "PickupDistance": {
        "Modifiers": ["PickupDistance", "PickupDistance", "PickupDistance", "PickupDistance"],
    },
    "WeaponDamage": {
        "Modifiers": ["WeaponDamage", "WeaponDamage", "WeaponDamage", "WeaponDamage"],
        "Modifiers_Infinite": ["WeaponDamage_Extra"],
    },
    "WeaponCooldown": {
        "Modifiers": ["WeaponCooldown", "WeaponCooldown", "WeaponCooldown", "WeaponCooldown"],
    },
    "WeaponSize": {
        "Modifiers": ["WeaponSize", "WeaponSize", "WeaponSize", "WeaponSize"],
    },
    "WeaponAmount": {
        "Modifiers": ["WeaponAmount", "WeaponAmount"],
    },
}