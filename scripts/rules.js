import { Enemies } from "./R_Enemies.js"
import { Items } from "./R_Items.js"
import { Player } from "./R_Player.js"
import { Pools } from "./R_Pools.js"
import { Queues } from "./R_Queues.js"
import { Spawns } from "./R_Spawns.js"
import { Upgrades } from "./R_Upgrades.js"
import { Weapons } from "./R_Weapons.js"

export const rules = {
    // todo_maybe: Timers? with an array of timer tags
    "Enemies": Enemies,
    "Items": Items,
    "Player": Player,
    "Pools": Pools,
    "Queues": Queues,
    "Spawns": Spawns,
    "Upgrades": Upgrades,
    "Weapons": Weapons,
}