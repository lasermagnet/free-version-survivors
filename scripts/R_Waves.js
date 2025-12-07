export const Waves = [
    {
        "Name": "Wave 0",
        "EnemySpawnCycles": 1,
        "EnemySpawnCooldown": 3,
        "EnemySpawnPerCycle": 0,
        "EnemySpawnPool": [[40, "Slime"]], // todo support empty pool
        "EnemySpawnFixed": {},
        "ItemSpawnPool": [[1, "Revolver"]], // todo check if empty pool bugs
    },
    {
        "Name": "Wave 1",
        "EnemySpawnCycles": 20,
        "EnemySpawnCooldown": 3,
        "EnemySpawnPerCycle": 3,
        "EnemySpawnPool": [[0.5, "HealingCrate"], [40, "Slime"], [20, "Rat"]],
        "EnemySpawnFixed": {},
        "ItemSpawnPool": [[1, "Sword"], [1, "Flame"]],
    },
    {
        "Name": "Wave 2",
        "EnemySpawnCycles": 20,
        "EnemySpawnCooldown": 3,
        "EnemySpawnPerCycle": 3,
        "EnemySpawnPool": [[5, "Crab"], [5, "Snake"]],
        "EnemySpawnFixed": { "Tentacle": 1 },
        "ItemSpawnPool": [[1, "Revolver"], [1, "Myst"]],
    },
]