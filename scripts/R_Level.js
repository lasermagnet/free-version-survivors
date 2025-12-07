export const Level = {
    "Map": { // dimensions
        "Width": 2000,
        "Height": 2000,
        "WallThickness": 200,
    },
    "Distance": {
        "EnemySpawn": 220, // radius of the "spawn circle": distance of spawning enemies from the player
        "EnemyTeleport": 280, // when an enemy is farther then this from the player, it will be teleported closer (on the "spawn circle")
        "ItemSpawnMinimum": 35 // minimum distance of item spawns (when an enemy dies) from the player
    },
    "EnemyLimit": 700, // maximum number of enemies allowed to exist (enemy spawns will be skipped when reached)
    "SpawnInterval": 1, // seconds, determines enemy spawn frequency
    "WaveLoopTo": 10, // when no waves are left, jump back to this wave and repeat all subsequent ones too
    "Dividers": {
        "DropValueToLevel": 15, // the value of a health or experience drop is divided by this number then truncated to an integer to make up the animation frame of the drop sprite (allows different looking drops to signify their value)
        "DamageToColor": 10, // similarly, damage numbers are divided by this number and used in tokenat(C_UI_DamageNumber_Colors_SSV, x) to determine the color of a damage number
    },

    "UpgradePool": [
        // list of upgrades that can come up when the player levels up
        // (touple format: [weight, upgradeName])

        // One-off upgrades
        [1, "HealAll"],

        //  Weapon upgrades
        [2, "Axe"],
        [1, "Flame"],
        [1, "Chainsaw"],
        [1, "Spikes"],
        [1, "Sword"],
        [0.5, "Ice"],

        // Player stat upgrades
        [1, "Regeneration"],
        [1, "EnemySpawnAmount"],
        [1, "WeaponCooldown"],
        [1, "MaxHealth"],
        [1, "HealingBonus"],
        [1, "MovementSpeed"],
        [1, "ExperienceBonus"],
        [1, "PickupDistance"],
        [1, "LevelUpFreezeTime"],
        [1, "WeaponDamage"],
        [1, "WeaponCooldown"],
        [1, "WeaponSize"],
        [0.5, "WeaponAmount"],

    ],

}