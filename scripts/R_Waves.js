const _example = {
    "": {
        // text to show when the wave starts
        "Label": "WaveTemplate",

        // length of fade out tween to hide label (defaults to 1 if not specified)
        "LabelTime": 1,

        // amount of enemies to spawn from the pool
        "EnemyAmount": 10,

        // length of the wave in seconds
        "Time": 10,

        // list of enemies that can spawn (tuple format: [weight, enemyName])
        "EnemySpawnPool": [[1, "Slime"]],

        // a list of enemies to spawn at the start of the wave (format: {EnemyName: amount})
        "EnemySpawnFixed": { "Slime": 1 },              

        // a single item from this array will spawn at the start of the wave (tuple format: [weight, modifierName])
        "ItemSpawnPool": [[1, "Axe_Amount"]],           
        
        // modifiers to apply at the start of the wave
        "ModifiersToApply": ["EnemyMovementSpeedBig"],  
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
        "LabelTime": 2,
        "EnemyAmount": 200,
        "Time": 60,
        "EnemySpawnPool": [[2, "Slime"], [1, "Rat"]],
        "EnemySpawnFixed": { "Slime_Boss": 2 },
        "ItemSpawnPool": [[1, "Axe_Amount"], [1, "Flame_Amount"]],
        "ModifiersToApply": ["Flame_Amount"]
    },
    {
        "Label": "Now some Crabs & Snakes. And a Tentacle.",
        "LabelTime": 2,
        "EnemyAmount": 300,
        "Time": 60,
        "EnemySpawnPool": [[3, "Slime"], [2, "Rat"], [1, "Crab"], [1, "Snake"]],
        "EnemySpawnFixed": { "Tentacle": 1 },
        "ItemSpawnPool": [[1, "Chainsaw_Amount"], [1, "Spikes_Amount"]],
    },
    {
        "Label": "Need some healin'?",
        "LabelTime": 2,
        "Time": 3,
        "EnemySpawnFixed": { "HealingCrate": 3 },
    },
    {
        "Label": "Get ready..",
        "EnemyAmount": 1000,
        "Time": 120,
        "EnemySpawnPool": [[0.5, "MagnetCrate"], [40, "Slime"], [20, "Rat"], [5, "Crab"], [5, "Snake"], [3, "Werewolf"], [2, "Ent"]],
        "ItemSpawnPool": [[1, "Axe_Amount"], [1, "Flame_Amount"], [1, "Chainsaw_Amount"], [1, "Spikes_Amount"]],
    },
    {
        "Label": "Incoming healing crates...",
        "LabelTime": 2,
        "Time": 3,
        "EnemySpawnFixed": { "HealingCrate": 5 },
    },
    {
        "Label": "And now... everything.",
        "LabelTime": 2,
        "Time": 3,
    },
    {
        "EnemyAmount": 600,
        "Time": 60,
        "EnemySpawnPool": [[0.5, "MagnetCrate"], [1, "HealingCrate"], [40, "Slime"], [20, "Rat"], [5, "Crab"], [5, "Snake"], [3, "Werewolf"], [2, "Ent"], [2, "Tentacle"], [2, "Dwarf"], [2, "Golem"], [2, "Ogre"], [1, "Cultist"], [1, "Beholder"]],
        "EnemySpawnFixed": {},
        "ItemSpawnPool": [[1, "Axe_Amount"], [1, "Flame_Amount"], [1, "Chainsaw_Amount"], [1, "Spikes_Amount"]],
    },
    {
        "Label": "Boss time!",
        "EnemyAmount": 750,
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
        "Time": 10,
        "EnemySpawnFixed": { "MagnetCrate": 1 },
    },
    {
        "Label": "Keep surviving!",
        "LabelTime": 2,
        "EnemyAmount": 2000,
        "Time": 60,
        "EnemySpawnFixed": { "Beholder_Boss": 3 },
        "EnemySpawnPool": [[0.2, "HealingCrate"], [10, "Slime"], [10, "Rat"], [5, "Crab"], [5, "Snake"], [3, "Werewolf"], [2, "Ent"], [2, "Tentacle"], [2, "Dwarf"], [2, "Golem"], [2, "Ogre"], [1, "Cultist"], [1, "Beholder"], [0.1, "Beholder_Boss"]],
        "ModifiersToApply": ["EnemyMovementSpeedBig"],
    },
]