// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}


function declareWinner(fighter1, fighter2, firstAttacker) {
  if (fighter1.name === firstAttacker) {
    fighter2.health = fighter2.health - fighter1.damagePerAttack;
    if (fighter2.health > 0) {
      return declareWinner(fighter1, fighter2, fighter2.name)
    }
  } else {
    fighter1.health = fighter1.health - fighter2.damagePerAttack;
    if (fighter1.health > 0) {
      return declareWinner(fighter1, fighter2, fighter1.name)
    }
  }
  return firstAttacker;
}

/*console.log(declareWinner(
  new Fighter("Lew", 10, 2),
  new Fighter("Harry", 5, 4), "Lew"), "Lew");

console.log(declareWinner(
  new Fighter("Lew", 10, 2),
  new Fighter("Harry", 5, 4), "Harry"), "Harry");

console.log(declareWinner(
  new Fighter("Harald", 20, 5),
  new Fighter("Harry", 5, 4), "Harry"), "Harald")

console.log(declareWinner(
  new Fighter("Harald", 20, 5),
  new Fighter("Harry", 5, 4), "Harald"), "Harald")*/

console.log(declareWinner(
  new Fighter("Jerry", 30, 3),
  new Fighter("Harald", 20, 5), "Jerry"), "Harald")


// node "Two fighters one winner"