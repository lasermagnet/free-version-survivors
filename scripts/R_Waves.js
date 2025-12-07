const _template = {
    "Name": "WaveTemplate",
    "EnemyAmount": 10,
    "Time": 10,
    "EnemySpawnPool": [[1, "Slime"]],
    "EnemySpawnFixed": { "Slime": 1 },
    "ItemSpawnPool": [[1, "Axe_Amount"]],
}

export const Waves = [
    {
        "Name": "Welcome!",
        "Time": 2,
        "EnemySpawnFixed": { "MagnetCrate": 1 },
    },
    {
        "Name": "And now: Slimes & Rats!",
        "EnemyAmount": 200,
        "Time": 60,
        "EnemySpawnPool": [[2, "Slime"], [1, "Rat"]],
        "EnemySpawnFixed": { "SlimeBig": 2 },
        "ItemSpawnPool": [[1, "Axe_Amount"], [1, "Flame_Amount"]],
    },
    {
        "Name": "Now some Crabs & Snakes. And a Tentacle.",
        "EnemyAmount": 200,
        "Time": 60,
        "EnemySpawnPool": [[3, "Slime"], [2, "Rat"], [1, "Crab"], [1, "Snake"]],
        "EnemySpawnFixed": { "Tentacle": 1 },
        "ItemSpawnPool": [[1, "Chainsaw_Amount"], [1, "Spikes_Amount"]],
    },
    {
        "Name": "Need some healin'?",
        "Time": 3,
        "EnemySpawnFixed": { "HealingCrate": 3 },
    },
    {
        "Name": "Get ready..",
        "EnemyAmount": 400,
        "Time": 120,
        "EnemySpawnPool": [[0.5, "MagnetCrate"], [40, "Slime"], [20, "Rat"], [5, "Crab"], [5, "Snake"], [3, "Werewolf"], [2, "Ent"]],
        "ItemSpawnPool": [[1, "Axe_Amount"], [1, "Flame_Amount"], [1, "Chainsaw_Amount"], [1, "Spikes_Amount"]],
    },
    {
        "Name": "Incoming healing crates...",
        "Time": 3,
        "EnemySpawnFixed": { "HealingCrate": 5 },
    },
    {
        "Name": "And now... everything.",
        "Time": 3,
    },
    {
        "EnemyAmount": 200,
        "Time": 60,
        "EnemySpawnPool": [[0.5, "MagnetCrate"], [1, "HealingCrate"], [40, "Slime"], [20, "Rat"], [5, "Crab"], [5, "Snake"], [3, "Werewolf"], [2, "Ent"], [2, "Tentacle"], [2, "Dwarf"], [2, "Golem"], [2, "Ogre"], [1, "Cultist"], [1, "Beholder"]],
        "EnemySpawnFixed": {},
        "ItemSpawnPool": [[1, "Axe_Amount"], [1, "Flame_Amount"], [1, "Chainsaw_Amount"], [1, "Spikes_Amount"]],
    },
    {
        "EnemyAmount": 400,
        "Time": 60,
        "EnemySpawnPool": [[0.5, "MagnetCrate"], [1, "HealingCrate"], [40, "Slime"], [20, "Rat"], [5, "Crab"], [5, "Snake"], [3, "Werewolf"], [2, "Ent"], [2, "Tentacle"], [2, "Dwarf"], [2, "Golem"], [2, "Ogre"], [1, "Cultist"], [1, "Beholder"]],
        "EnemySpawnFixed": {},
        "ItemSpawnPool": [[1, "Axe_Amount"], [1, "Flame_Amount"], [1, "Chainsaw_Amount"], [1, "Spikes_Amount"]],
    },
    {
        "EnemyAmount": 600,
        "Time": 60,
        "EnemySpawnPool": [[1, "HealingCrate"], [40, "Slime"], [20, "Rat"], [5, "Crab"], [5, "Snake"], [3, "Werewolf"], [2, "Ent"], [2, "Tentacle"], [2, "Dwarf"], [2, "Golem"], [2, "Ogre"], [1, "Cultist"], [1, "Beholder"]],
    },
    {
        "Time": 30,
        "EnemySpawnFixed": { "MagnetCrate": 1 },
    },

]