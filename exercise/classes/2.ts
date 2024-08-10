// You are tasked with creating some components for a video game. The first is
// for managing the health of various game objects, and the second is for
// managing a treasure chest.
//
// For managing health, create a class called "Health" that has this
// functionality:
// - Allows setting the initial amount of health
// - Allows setting a maximum amount of health
// - Has functionality to add health (increase current health)
// - Has fucntionality to remove health (decrease current health)
//
// Additional notes:
// - It should not be possible to go over the maximum amount of health
// - Negative health is not allowed
//
// For managing treasure chests, create a class called "TreasureChest" that has
// this functionality:
// - Allows setting the content and the amount of the content. For example, a
//   treasure chest can contain an item called "Potion" and can hav a quantity
//   of 3.
// - A method to open the treasure chest. When the treasure chest is opened,
//   the contents and quantity come out of the treasure chest which can then be
//   given to the player (player implementation not required. Just make sure
//   that the data is available so the player inventory can be updated later.)
//
// Additional notes:
// - After opening a treasure chest and retrieving the contents, the player is
//   not allowed to get the items out again. Use any method you'd like to
//   implement this behavior.
//
// Perform the following steps to confirm that your Health class works
// correctly:
// - Make a new Health having the current health value set to 100 and the
//   maximum set to 200.
// - Add 30 health
// - Assert that the current health value is 130
// - Add 500 health
// - Assert that the current health value is 200
// - Remove 500 health
// - Assert that the current health value is 0
//
// Perform the following steps to confirm that your TreasureChest class works
// correctly:
// - Make a new TreasureChest having the contents of "gold" and a quantity of
//   900
// - Open the treasure chest and take out the contents and quantity
// - Assert that the contents are "gold" and the quantity is 900
// - Try to open the treasure chest again
// - Assert that you _do not_ get "gold" and 900 again

import { strict as assert } from "assert";
