const _example = {
    "": {
        "BlockMovement": false, // whether a weapon blocks movement of overlapping enemies
        "Cooldown": 2, // seconds, the weapon attacks at this interval
        "Amount": 0, // 
        "Damage": 0, // damage per second while weapon is overlapping an enemy
        "PierceLimit": 1,
        "AngleOffset": 0,
        "Scale": 1,
        "StaticAngle": null,
        "Duration": 1, // seconds, defines the lifetime of a weapon (fades out at the end)
        "MovementSpeed": 0,
        "MovementAcceleration": 0,
        "Pin": 0,
        "OrbitRadius": 0,
        "OrbitSpeed": 0,
        "PositionRandom1": 0,
        "PositionRandom2": 0,
        "RotationSpeed": 0,
        "FreezeTime": 0,
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
        "MovementSpeed": 100,
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
        "Pin": 1,
    },
    "Chainsaw": {
        "BlockMovement": true,
        "Cooldown": 5,
        "Amount": 0,
        "Damage": 20,
        "PierceLimit": 1000,
        "Scale": 0.5,
        "Duration": 4,
        "Pin": 1,
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
}