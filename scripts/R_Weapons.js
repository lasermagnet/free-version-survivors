const _example = {
    "": {
        // number of weapons to spawn per attack
        "Amount": 0,

        // whether a weapon blocks movement of overlapping enemies
        "BlockMovement": false,

        // seconds, the weapon attacks at this interval
        "Cooldown": 2,

        // damage per second while weapon is overlapping an enemy
        "Damage": 0,

        // weapon is destroyed after hitting this amount of unique enemioes
        "PierceLimit": 1,

        // optional rotation offset for the weapon sprite
        "RotationAngleOffset": 0,

        // size multiplier
        "Scale": 1,

        // null: weapon will face the player; any number: fixed angle
        "StaticAngle": null,

        // seconds, defines the lifetime of a weapon (fades out at the end)
        "Duration": 1,

        // movement speed for the Bullet behaviour
        "BulletSpeed": 0,

        // acceleration for the Bullet behaviour
        "BulletAcceleration": 0,

        // whether to pin position of the weapon to the player
        "Pin": false,

        // radius for the Orbit behaviour
        "OrbitRadius": 0,

        // movement speed for the Orbit behaviour
        "OrbitSpeed": 0,

        // X/Y position randomization per attack
        "PositionRandom1": 0,

        // X/Y position randomization per weapon instance
        "PositionRandom2": 0,

        // rotation speed for the Rotate behaviour
        "RotationSpeed": 0,

        // amount of time the weapon freezes an overlapping enemy
        "FreezeTime": 0,

        // null: weapon has no knockback; 0: weapon blocks enemy movement; >0: weapon moves back enemies with given speed
        "KnockbackSpeed": 0,

        // length of knockback effect
        "KnockbackDuration": 0,
    }
}

export const Weapons = {
    "Axe": {
        //"Amount": 0,
        "BlockMovement": false,
        "Cooldown": 1.5,
        "Damage": 30,
        "PierceLimit": 2,
        "RotationAngleOffset": -45,
        "Scale": 0.5,
        "Duration": 4,
        "BulletSpeed": 100,
        "RotationSpeed": 300,
        "KnockbackSpeed": 0,
        "KnockbackDuration": 0.1,
    },
    "Flame": {
        //"Amount": 1,
        "BlockMovement": false,
        "Cooldown": 3,
        "Damage": 25,
        "PierceLimit": 1000,
        "RotationAngleOffset": 45,
        "Scale": 0.65,
        "Duration": 0.6,
        "Pin": true,
        "KnockbackSpeed": 0.6,
        "KnockbackDuration": 0.15,
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
        "KnockbackSpeed": 1.5,
        "KnockbackDuration": 0.1,
    },
    "Spikes": {
        "Cooldown": 8,
        "Damage": 3,
        "PierceLimit": 1000,
        "Scale": 0.5,
        "StaticAngle": 0,
        "Duration": 3,
        "PositionRandom1": 40,
        "PositionRandom2": 30,
        "KnockbackSpeed": 0,
        "KnockbackDuration": 0.05,
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
    },
    "Sword": {
        "BlockMovement": false,
        "Cooldown": 2.5,
        "Damage": 40,
        "PierceLimit": 10000,
        "SpawnAngleOffset": -160,
        "Scale": 0.5,
        "Duration": 0.3,
        "Pin": true,
        "OrbitRadius": 5,
        "OrbitSpeed": 400,
        "KnockbackSpeed": 2,
        "KnockbackDuration": 0.15,
    },
}