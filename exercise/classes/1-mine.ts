import { strict as assert } from "assert";

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

class Health {
  initialHealth: number;
  maximumHealth: number;

  constructor(_initialHealth: number, _maximumHealth: number) {
    this.initialHealth = _initialHealth;
    this.maximumHealth = _maximumHealth;
  }

  addHealth(point: number): void {
    if (point < 0) {
      console.log("negative point");
      return;
    }
    if (this.initialHealth + point <= this.maximumHealth) {
      console.log("if");
      this.initialHealth += point;
    } else {
      console.log("else");
      this.initialHealth = this.maximumHealth;
    }
  }

  removeHealth(point: number): void {
    if (point < 0) {
      console.log("negative point");
      return;
    }
    if (this.initialHealth - point > 0) {
      console.log("if");
      this.initialHealth -= point;
    } else {
      console.log("else");
      this.initialHealth = 0;
    }
  }
}

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

interface Reward {
  content: string;
  amount: number;
}
class TreasureChest {
  content: string;
  amount: number;

  constructor(_content: string, _amount: number) {
    this.content = _content;
    this.amount = _amount;
  }

  openChest(): Reward {
    const reward: Reward = {
      content: this.content,
      amount: this.amount,
    };

    this.content = "empty";
    this.amount = 0;

    return reward;
  }
}

// Perform the following steps to confirm that your Health class works
// correctly:
// - Make a new Health having the current health value set to 100 and the
//   maximum set to 200.

const player1 = new Health(100, 200);
console.log(1, "player1", player1);

// - Add 30 health
// - Assert that the current health value is 130

player1.addHealth(30);
console.log(2, "player1", player1);
assert.deepEqual([player1.initialHealth, player1.maximumHealth], [130, 200]);

// - Add 500 health
// - Assert that the current health value is 200

player1.addHealth(500);
console.log(3, "player1", player1);
assert.deepEqual([player1.initialHealth, player1.maximumHealth], [200, 200]);

// - Remove 500 health
// - Assert that the current health value is 0

player1.removeHealth(500);
console.log(4, "player1", player1);
assert.deepEqual([player1.initialHealth, player1.maximumHealth], [0, 200]);

// Perform the following steps to confirm that your TreasureChest class works
// correctly:
// - Make a new TreasureChest having the contents of "gold" and a quantity of
//   900

const treasure1 = new TreasureChest("gold", 900);
console.log(5, "treasure1", treasure1);

// - Open the treasure chest and take out the contents and quantity
// - Assert that the contents are "gold" and the quantity is 900

const treasure1reward: Reward = treasure1.openChest();
console.log(6, "treasure1", treasure1);
console.log(7, "treasure1reward", treasure1reward);
assert.deepEqual(treasure1reward, { content: "gold", amount: 900 });

// - Try to open the treasure chest again
// - Assert that you _do not_ get "gold" and 900 again

const treasure1rewardAgain: Reward = treasure1.openChest();
console.log(8, "treasure1rewardAgain", treasure1rewardAgain);
assert.deepEqual(treasure1rewardAgain, { content: "empty", amount: 0 });
