export const Waves = [ // todo level setting: repeat from wave number (when looping waves)
    {
        "Name": "Welcome!",
        "EnemySpawnCycles": 1,
        "EnemySpawnCooldown": 3,
        "EnemySpawnPerCycle": 0,
        "EnemySpawnPool": [],
        "EnemySpawnFixed": {},
        "ItemSpawnPool": [],
    },
    {
        "Name": "And now: slimes & rats!",
        "EnemySpawnCycles": 20,
        "EnemySpawnCooldown": 3,
        "EnemySpawnPerCycle": 15,
        "EnemySpawnPool": [[0.5, "HealingCrate"], [40, "Slime"], [20, "Rat"]],
        "EnemySpawnFixed": {},
        "ItemSpawnPool": [[1, "Sword"], [1, "Flame"]],
    },
    {
        "Name": "Now some crabs & snakes",
        // todo maybe specify total amount of enemies instead of per cycle
        "EnemySpawnCycles": 20,
        "EnemySpawnCooldown": 3,
        "EnemySpawnPerCycle": 10,
        "EnemySpawnPool": [[5, "Crab"], [5, "Snake"]],
        "EnemySpawnFixed": { "Tentacle": 1 },
        "ItemSpawnPool": [[1, "Revolver"], [1, "Myst"]],
    },
]