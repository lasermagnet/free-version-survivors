const _example = {
    "": {
        // ordered list of modifiers to show first
        "Modifiers": [],

        // unordered list of modifiers to keep showing (randomly) after normal modifiers ran out
        "Modifiers_Infinite": [],
    },
}

export const Upgrades = {
    // One-off boosts
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
    },
    "Chainsaw": {
        "Modifiers": ["Chainsaw_Amount", "Chainsaw_Radius", "Chainsaw_Size", "Chainsaw_Speed", "Chainsaw_Amount", "Chainsaw_Radius", "Chainsaw_Amount", "Chainsaw_Size", "Chainsaw_Speed", "Chainsaw_Amount", "Chainsaw_Radius", "Chainsaw_Size"],
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
    "EnemyMovementSpeed": {
        "Modifiers_Infinite": ["EnemyMovementSpeed"]
    },
    "EnemySpawnAmount": {
        "Modifiers_Infinite": ["EnemySpawnAmount"]
    },
    "Regeneration": {
        "Modifiers": ["Regeneration", "Regeneration", "Regeneration", "Regeneration"],
    },
    "MaxHealth": {
        "Modifiers": ["MaxHealth", "MaxHealth", "MaxHealth", "MaxHealth"],
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
        "Modifiers_Infinite": ["WeaponCooldown_Extra"],
    },
    "WeaponSize": {
        "Modifiers": ["WeaponSize", "WeaponSize", "WeaponSize", "WeaponSize"],
    },
    "WeaponAmount": {
        "Modifiers": ["WeaponAmount", "WeaponAmount"],
    },
    "Armor": {
        "Modifiers": ["Armor", "Armor", "Armor", "Armor", "Armor"],
    },
}