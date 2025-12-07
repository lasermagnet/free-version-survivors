const _example = {
    "": {
        "Modifiers": [],            // todo
        "Modifiers_Infinite": [],   // todo
    },
}

export const Upgrades = {
    "HealAll": {
        "Modifiers_Infinite": ["HealAll"],
    },

    // Weapons
    "Axe": {
        "Modifiers": ["Axe_Amount", "Axe_Damage", "Axe_PierceLimit", "Axe_Amount", "Axe_Damage", "Axe_PierceLimit"],
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
    "Ice": {
        "Modifiers": ["Ice_Amount", "Ice_Duration", "Ice_FreezeTime", "Ice_Duration", "Ice_FreezeTime", "Ice_Duration", "Ice_FreezeTime"],
    },
    "Sword": {
        "Modifiers": ["Sword_Amount", "Sword_Damage", "Sword_Size", "Sword_Damage", "Sword_Size", "Sword_Damage", "Sword_Size"],
    },

    // Player stats
    // todo_maybe number based usage limit for "simple" upgrades? or group them together with optional touple format (for specifying amount) with string fallback (amount = 1)?
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
    "LevelUpFreezeTime": {
        "Modifiers": ["LevelUpFreezeTime", "LevelUpFreezeTime", "LevelUpFreezeTime", "LevelUpFreezeTime", "LevelUpFreezeTime",]
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