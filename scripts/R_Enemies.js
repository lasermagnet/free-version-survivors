const _example = {
    "": {
        "Health": 1,
        // Starting health. Enemy with 0 health self destructs on spawn.

        "Damage": 1,
        // damage per second while weapon is overlapping the player

        "Healing": 0,
        // healing drop value (for crates spawning health drops)

        "Experience": 10,
        // experience drop value

        "MovementSpeed": 0,
        // movement speed (0 = enemy is stationary, eg. crates)

        /* // this is unused at the moment
        "MovementAngle": null,
        // if specified, enemy will move in this angle; -1 value is not supported
        */

        "Density": 1,
        // physics density (defaults to 1 when unset or null)

        "Scale": 1,
        // sprite size multiplier (defaults to 1 when unset or null)

        "Animation": "Beholder",
        // (optional) custom animation name (by the default it's the enemy's name)

        "ItemSpawnDisabled": false,
        // whether the enemy can spawn an item (so containers don't spawn items, only drops)

        "Ghost": false,
        // If false or unset, enemy will move with Physics and collide. If true, enemy will move via Bullet and won't collide with enemies or the player, but can still be stopped by weapons with movement block or knockback

        "FixedAngle": true,
        // If false or unset, enemy keeps moving towards player. If true, enemy moves in a fixed angle (set when spawned, toward the player)

        "Translucency": 0,
        // Inverse opacity value, 0 = fully opaque, 100 = invisible

        "Lifetime": 0,
        // if unset / falsy, enemy doesn't expire; if set, enemy gets destroyed after this amount of seconds

        "DestroyOnImpact": false,
        // destroy enemy (with fade out) when colliding with the player
    }
}

export const Enemies = {
    "Projectile": {
        "Health": 1,
        "Damage": 40,
        "MovementSpeed": 3.5,
        "Ghost": true,
        "FixedAngle": true,
        "Translucency": 20,
        "Lifetime": 8,
        "DestroyOnImpact": true
    },
    "HealingCrate": {
        "Health": 5,
        "Healing": 50,
        "ItemSpawnDisabled": true,
    },
    "MagnetCrate": {
        "Health": 0,
        "ItemSpawnDisabled": true,
    },
    "Slime": {
        "Health": 3,
        "Damage": 10,
        "Experience": 4,
        "MovementSpeed": 0.5,
        //"Ghost": true, // todo remove
    },
    "Slime_Boss": {
        "Health": 50,
        "Damage": 20,
        "Experience": 50,
        "MovementSpeed": 0.7,
        "Scale": 2.5,
        //"FixedAngle": true // todo remove
    },
    "Rat": {
        "Health": 7,
        "Damage": 15,
        "Experience": 9,
        "MovementSpeed": 0.8,
        "Scale": 0.5,
    },
    "Crab": {
        "Health": 10,
        "Damage": 20,
        "Experience": 14,
        "MovementSpeed": 0.9,
    },
    "Snake": {
        "Health": 15,
        "Damage": 25,
        "Experience": 19,
        "MovementSpeed": 1,
    },
    "Werewolf": {
        "Health": 20,
        "Damage": 30,
        "Experience": 30,
        "MovementSpeed": 1.1,
    },
    "Ent": {
        "Health": 50,
        "Damage": 35,
        "Experience": 50,
        "MovementSpeed": 0.5,
        "Scale": 2,
    },
    "Tentacle": {
        "Health": 70,
        "Damage": 40,
        "Experience": 80,
        "MovementSpeed": 1.2,
        "Scale": 1.5,
    },
    "Dwarf": {
        "Health": 80,
        "Damage": 45,
        "Experience": 90,
        "MovementSpeed": 0.8,
        "Scale": 1.3,
    },
    "Golem": {
        "Health": 100,
        "Damage": 50,
        "Experience": 120,
        "MovementSpeed": 1.5,
        "Scale": 1.7,
    },
    "Ogre": {
        "Health": 150,
        "Damage": 55,
        "Experience": 180,
        "MovementSpeed": 1.5,
        "Scale": 2.5,
        "Density": 10,
    },
    "Cultist": {
        "Health": 200,
        "Damage": 60,
        "Experience": 250,
        "MovementSpeed": 2.5,
        "Scale": 2,
        "Density": 10,
    },
    "Beholder": {
        "Health": 500,
        "Damage": 70,
        "Experience": 320,
        "MovementSpeed": 2.2,
        "Scale": 1.4,
    },
    "Beholder_Boss": {
        "Health": 1000,
        "Damage": 200,
        "Experience": 700,
        "MovementSpeed": 2.5,
        "Scale": 3,
        "Animation": "Beholder",
        "Density": 10,
    }
}