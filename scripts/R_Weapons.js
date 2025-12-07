const _example = {
    "": {
        "Amount": 0,                // number of weapons to spawn per attack
        "BlockMovement": false,     // whether a weapon blocks movement of overlapping enemies
        "Cooldown": 2,              // seconds, the weapon attacks at this interval
        "Damage": 0,                // damage per second while weapon is overlapping an enemy
        "PierceLimit": 1,           // weapon is destroyed after hitting this amount of unique enemioes
        "RotationAngleOffset": 0,   // optional rotation offset for the weapon sprite
        "Scale": 1,                 // size multiplier
        "StaticAngle": null,        // null: weapon will keep facing the player; any number: fixed angle
        "Duration": 1,              // seconds, defines the lifetime of a weapon (fades out at the end)
        "BulletSpeed": 0,           // movement speed for the Bullet behaviour
        "BulletAcceleration": 0,    // acceleration for the Bullet behaviour
        "Pin": false,               // whether to pin position of the weapon to the player
        "OrbitRadius": 0,           // radius for the Orbit behaviour
        "OrbitSpeed": 0,            // movement speed for the Orbit behaviour
        "PositionRandom1": 0,       // X/Y position randomization per attack
        "PositionRandom2": 0,       // X/Y position randomization per weapon instance
        "RotationSpeed": 0,         // rotation speed for the Rotate behaviour
        "FreezeTime": 0,            // amount of time the weapon freezes an overlapping enemy
        "KnockbackImpulse": 0,      // amount of physics impulse to apply on enemy as knockback
        "KnockbackCooldown": 0,     // amount of time to wait between knockbacks
    }
}

export const Weapons = {
    "Axe": {
        "Amount": 1,
        "BlockMovement": false,
        "Cooldown": 1.5,
        "Damage": 30,
        "PierceLimit": 2,
        "RotationAngleOffset": -45,
        "Scale": 0.5,
        "Duration": 4,
        "BulletSpeed": 100,
        "RotationSpeed": 300,
        "KnockbackImpulse": 0.3,
        "KnockbackCooldown": 0.2,
    },
    "Flame": {
        "BlockMovement": true,
        "Cooldown": 3,
        "Damage": 25,
        "PierceLimit": 1000,
        "RotationAngleOffset": 45,
        "Scale": 0.65,
        "Duration": 0.7,
        "Pin": true,
        "KnockbackImpulse": 0.5,
        "KnockbackCooldown": 0.5,
    },
    "Chainsaw": {
        "BlockMovement": false,
        "Cooldown": 5,
        "Damage": 20,
        "PierceLimit": 1000,
        "Scale": 0.5,
        "Duration": 4,
        "Pin": true,
        "OrbitRadius": 25,
        "OrbitSpeed": 200,
    },
    "Spikes": {
        "Cooldown": 6,
        "Damage": 4,
        "PierceLimit": 1000,
        "Scale": 0.5,
        "StaticAngle": 10,
        "Duration": 3,
        "PositionRandom1": 40,
        "PositionRandom2": 30,
    },
    "Ice": {
        "Cooldown": 5,
        "Damage": 2,
        "PierceLimit": 3,
        "Scale": 0.5,
        "Duration": 1,
        "FreezeTime": 1,
        "PositionRandom1": 80,
        "OrbitRadius": 13.5,
        "OrbitSpeed": 250,
        "KnockbackImpulse": 0.3,
        "KnockbackCooldown": 0.2,
    },
    "Sword": {
        "BlockMovement": true,
        "Cooldown": 2.5,
        "Damage": 40,
        "PierceLimit": 10000,
        "SpawnAngleOffset": -160,
        "Scale": 0.5,
        "Duration": 0.3,
        "Pin": true,
        "OrbitRadius": 5,
        "OrbitSpeed": 400,
        "KnockbackImpulse": 0.8,
        "KnockbackCooldown": 0.5,
    },
}