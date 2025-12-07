export const Level = {
    "Map": {
        "Width": 2000,
        "Height": 2000,
        "WallThickness": 200,
    },
    "Distance": {
        "EnemySpawn": 210, // radius of the "spawn circle": distance of spawning enemies from the player
        "EnemyTeleport": 280, // when an enemy is farther then this from the player, it will be teleported closer (on the "spawn circle")
        "ItemSpawnMinimum": 35 // minimum distance of item spawns (when an enemy dies) from the player
    },
    "SpawnInterval": 1,
    "WaveLoopTo": 9, // when no waves are left, jump back to this wave and repeat all subsequent ones too
    "Dividers": {
        "DropValueToLevel": 10,
        "DamageToColor": 10,
    },
     // the value of a health or experience drop is divided by this number then truncated to an integer to make up the animation frame of the drop sprite (allows different looking drops to signify their value)
}