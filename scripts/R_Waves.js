export const Waves = [
    {
        "Name": "Wave 1",
        "EnemySpawnCycles": 20,
        "EnemySpawnCooldown": 3,
        "EnemySpawnAmount": 3,
        "EnemySpawnFixed": { "Golem": 2 },
        "EnemySpawnPool": [[0.5, "HealingCrate"], [40, "Slime"], [20, "Rat"]],
        "ItemSpawnPool": [[1, "Sword"], [1, "Flame"],],
    },
    {
        "Name": "Wave 2",
        "EnemySpawnCycles": 20,
        "EnemySpawnCooldown": 3,
        "EnemySpawnAmount": 3,
        "EnemySpawnFixed": { "Tentacle": 1 },
        "EnemySpawnPool": [[5, "Crab"], [5, "Snake"]],
        "ItemSpawnPool": [[1, "Revolver"], [1, "Myst"]],
    },
]