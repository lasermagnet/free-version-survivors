const _example = {
    "": {
        "BlockMovement": false,     // whether a weapon blocks movement of overlapping enemies
        "Cooldown": 2,              // seconds, the weapon attacks at this interval
        "Amount": 0,                // number of weapons to spawn per attack
        "Damage": 0,                // damage per second while weapon is overlapping an enemy
        "PierceLimit": 1,           // weapon is destroyed after hitting this amount of unique enemioes
        "AngleOffset": 0,           // optional rotation offset for the weapon sprite (eg. if its drawn pointing to the top right, use -45)
        "Scale": 1,                 // size multiplier
        "StaticAngle": null,        // null means weapon will keep facing the player, a number sets a fixed angle
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
    }
}

export const Weapons = {
    "Axe": {
        "BlockMovement": true,
        "Cooldown": 1.5,
        "Amount": 1,
        "Damage": 30,
        "PierceLimit": 2,
        "AngleOffset": -45,
        "Scale": 0.5,
        "Duration": 4,
        "BulletSpeed": 100,
        "RotationSpeed": 300,
    },
    "Flame": {
        "BlockMovement": true,
        "Cooldown": 3,
        "Amount": 0,
        "Damage": 25,
        "PierceLimit": 1000,
        "AngleOffset": 45,
        "Scale": 0.65,
        "Duration": 0.7,
        "Pin": true,
    },
    "Chainsaw": {
        "BlockMovement": true,
        "Cooldown": 5,
        "Amount": 0,
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
        "Amount": 0,
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
        "Amount": 0,
        "Damage": 2,
        "PierceLimit": 3,
        "Scale": 0.5,
        "Duration": 1,
        "FreezeTime": 1,
        "PositionRandom1": 80,
        "OrbitRadius": 13.5,
        "OrbitSpeed": 250,
    }
}