const _example = {
    "": {
        "Label": "WaveTemplate",                // text to show when the wave starts
        "EnemyAmount": 10,                      // amount of enemies to spawn from the pool
        "Time": 10,                             // length of the wave in seconds
        "EnemySpawnPool": [[1, "Slime"]],       // list of enemies that can spawn (touple format: [weight, enemyName])
        "EnemySpawnFixed": { "Slime": 1 },      // a list of enemies to spawn at the start of the wave (format: {EnemyName: amount})
        "ItemSpawnPool": [[1, "Axe_Amount"]],   // a single item from this array will spawn at the start of the wave (touple format: [weight, modifierName])
        "ModifiersToApply": ["EnemyMovementSpeedBig"], // modifiers to apply at the start of the wave
    }
}

export const Waves = [
    {
        "Label": "Hi there!",
        "Time": 2,
        "EnemySpawnFixed": { "MagnetCrate": 1 },
    },
    {
        "Label": "And now: Slimes & Rats!",
        "EnemyAmount": 200,
        "Time": 60,
        "EnemySpawnPool": [[2, "Slime"], [1, "Rat"]],
        "EnemySpawnFixed": { "Slime_Boss": 2 },
        "ItemSpawnPool": [[1, "Axe_Amount"], [1, "Flame_Amount"]],
        //"ModifiersToApply": ["EnemyMovementSpeedBig"],
    },
    {
        "Label": "Now some Crabs & Snakes. And a Tentacle.",
        "EnemyAmount": 200,
        "Time": 60,
        "EnemySpawnPool": [[3, "Slime"], [2, "Rat"], [1, "Crab"], [1, "Snake"]],
        "EnemySpawnFixed": { "Tentacle": 1 },
        "ItemSpawnPool": [[1, "Chainsaw_Amount"], [1, "Spikes_Amount"]],
    },
    {
        "Label": "Need some healin'?",
        "Time": 3,
        "EnemySpawnFixed": { "HealingCrate": 3 },
    },
    {
        "Label": "Get ready..",
        "EnemyAmount": 400,
        "Time": 120,
        "EnemySpawnPool": [[0.5, "MagnetCrate"], [40, "Slime"], [20, "Rat"], [5, "Crab"], [5, "Snake"], [3, "Werewolf"], [2, "Ent"]],
        "ItemSpawnPool": [[1, "Axe_Amount"], [1, "Flame_Amount"], [1, "Chainsaw_Amount"], [1, "Spikes_Amount"]],
    },
    {
        "Label": "Incoming healing crates...",
        "Time": 3,
        "EnemySpawnFixed": { "HealingCrate": 5 },
    },
    {
        "Label": "And now... everything.",
        "Time": 3,
    },
    {
        "EnemyAmount": 300,
        "Time": 60,
        "EnemySpawnPool": [[0.5, "MagnetCrate"], [1, "HealingCrate"], [40, "Slime"], [20, "Rat"], [5, "Crab"], [5, "Snake"], [3, "Werewolf"], [2, "Ent"], [2, "Tentacle"], [2, "Dwarf"], [2, "Golem"], [2, "Ogre"], [1, "Cultist"], [1, "Beholder"]],
        "EnemySpawnFixed": {},
        "ItemSpawnPool": [[1, "Axe_Amount"], [1, "Flame_Amount"], [1, "Chainsaw_Amount"], [1, "Spikes_Amount"]],
    },
    {
        "Label": "Boss time!",
        "EnemyAmount": 600,
        "Time": 60,
        "EnemySpawnPool": [[0.5, "MagnetCrate"], [1, "HealingCrate"], [40, "Slime"], [20, "Rat"], [5, "Crab"], [5, "Snake"], [3, "Werewolf"], [2, "Ent"], [2, "Tentacle"], [2, "Dwarf"], [2, "Golem"], [2, "Ogre"], [1, "Cultist"], [1, "Beholder"]],
        "EnemySpawnFixed": { "Beholder_Boss": 1 },
        "ItemSpawnPool": [[1, "Axe_Amount"], [1, "Flame_Amount"], [1, "Chainsaw_Amount"], [1, "Spikes_Amount"]],
    },
    {
        "EnemyAmount": 1000,
        "Time": 60,
        "EnemySpawnPool": [[1, "HealingCrate"], [40, "Slime"], [20, "Rat"], [5, "Crab"], [5, "Snake"], [3, "Werewolf"], [2, "Ent"], [2, "Tentacle"], [2, "Dwarf"], [2, "Golem"], [2, "Ogre"], [1, "Cultist"], [1, "Beholder"]],
    },
    {
        "Time": 15,
        "EnemySpawnFixed": { "MagnetCrate": 1 },
    },
    {
        "EnemyAmount": 2000,
        "Time": 60,
        "EnemySpawnPool": [[0.2, "HealingCrate"], [10, "Slime"], [10, "Rat"], [5, "Crab"], [5, "Snake"], [3, "Werewolf"], [2, "Ent"], [2, "Tentacle"], [2, "Dwarf"], [2, "Golem"], [2, "Ogre"], [1, "Cultist"], [1, "Beholder"], [0.1, "Beholder_Boss"]],
    },
]