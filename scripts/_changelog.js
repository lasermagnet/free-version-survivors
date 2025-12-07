/*
Build 65
~ New enemy spawn & teleportation logic: instead of a fixed distance "spawn circle", enemies spawn on the edges of the (original) 16:9 viewport with some extra padding. Enemies are teleported closer when they are too far from the edges.

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