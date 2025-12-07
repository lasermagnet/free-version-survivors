/*

Build 68
- New: ability to activate a list of modifiers at the start of a wave. See ModifiersToApply in R_Waves.
- New: added "kills/s" (KPS) measurement & UI (shows when KPS is above 0)
- New: implemented a better "restart": instead of the basic browser refresh, stuff gets reset and the game goes back to the start screen. Rule changes in the editor persist between restarts (but not between browser refreshes).
- New (minor stuff): added dark background to pause and game over screens, enemies gradually stop moving after player is dead, added LabelTime property to Waves so it's possible to specify fade out interval of the label (defaults to 1 sec).
- Change: Moved (back) player health bar to bottom of the screen, so it's visible on the upgrade screen and hopefully easier to read in intense situations :)
- Change: level timer now pauses on the level up screen. Internally it was called timePassed, now it's timeSurvived.
- Change: some random acts of refactoring and balancing.
- Bugfix: kill count was inaccurate, as it was only increased by 1 per tick even if multiple enemies died in the same tick.

Build 67
- Reworked knockback system: KncobackForceMultiplier is gone, now there's KnockbackSpeed that can be either null (or absent) so the weapon ha no knockback, set to zero so the weapon stops & blocks enemy movement but doesn't cause knockback, or a value that moves the enemy like MovementSpeed, but in the knockback's direction.

Build 66
- The CodeMirror based rule editor can be removed more easily, just by deleting "_main.js".
- Some random balancing: decreased player health & speed.

Build 65
- New enemy spawn & teleportation logic: instead of a fixed distance "spawn circle", enemies spawn on the edges of the (original) 16:9 viewport with some extra padding. Enemies are teleported closer when they are too far from the edges. Note that Distance.EnemySpawn and Distance.EnemyTeleport properties in the Level ruleset were repurposed for the new system.
- Some balancing; reduced enemy numbers because new teleportation logic (and distances) makes the level a lot more dense.

Build 64
- Weapon knockback system (with an extra event): KnockbackForceMultiplier defines the multiplier which is applied on the enemy's movement speed to calculate the knocback force, KnockbackDuration defines how long an enemy is affected by knockback. The weapon's BlockMovement property overrides knocback values, so it must be set to false for knocback to work.
- Full screen keyboard shortcut (Shift+F) now works on the start screen as well

Build 63
- New player rule: "Bonus_Incoming_Damage_Multiplier": allows incoming damage reduction (or increase :) + a new matching "Armor" upgrade & modifier
- New enemy rule: "Density" (physics property), defaults to 1, allows making enemies "heavier" so they can push lighter enemies around
- Added dark translucent letterbox around layouts

Build 62
- Drop objects are now always at the bottom of their layer

Build 61
- added Player.Bonus_Enemy_MovementSpeed_Multiplier + matching upgrade & modifier
- minor changes to "balance" and the start screen

*/