/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes.
The console.log() statements should still return what is expected of them.

*/
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
  constructor(param) {
    this.createdAt = param.createdAt,
    this.name = param.name,
    this.dimensions = param.dimensions
  }
  destroy() {
    return `${this.name} was removed from the game`;
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
  constructor(stats) {
    super(stats);
    this.healthPoints = stats.healthPoints
  }
  takeDamage() {
    return `${this.name} took damage`;
 }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats {
  constructor(attr) {
    super(attr);
    this.team = attr.team,
    this.weapons = attr.weapons,
    this.language = attr.language
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}


class Hero extends Humanoid {
  constructor(attr) {
    super(attr);
    this.attack = attr.attack
  }
  death() {
    if (this.healthPoints <= 0) {
      return "you are dead";
    } else {
      return 'you are alive!'
    }
  }
}

class Villain extends Hero  {
  constructor(attr) {
    super(attr);
  }
}


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const buffguy = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 5,
      height: 5,
    },
    healthPoints: 20,
    name: 'Buffguy',
    team: 'My Own Team',
    weapons: [
      'Gun',
      'Bazooka',
    ],
    language: 'English',
    attack: function(name){
      name.healthPoints -= Math.floor(Math.random() * 3) + 1;//takes away a random number between 1-3 in health
      console.log(`Name: ${this.name} Health: ${name.healthPoints}`);
    }
  });

  const jerk = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 5,
      height: 5,
    },
    healthPoints: 20,
    name: 'jerk',
    team: 'Villain Team',
    weapons: [
      'Ray Gun',
      'Sucker Punch',
    ],
    language: 'Sarcasm',
    attack: function(name){
      name.healthPoints -= Math.floor(Math.random() * 3) + 1;//takes away a random # between 1-3 in health
      console.log(`Name:${this.name}  Health:${name.healthPoints}`);
    }
  });

  //console.log(mage.createdAt); // Today's date
  //console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  //console.log(swordsman.healthPoints); // 15
  //console.log(mage.name); // Bruce
  //console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
   //console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  //console.log(mage.takeDamage()); // Bruce took damage.
  //console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  // console.log(jerk.death());

  // Stretch task:
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  //* Give the Hero and Villains different methods that could be used to remove
  // health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

///To Play the Game, simply type 'matchStart()' in the console
  function matchStart(name) {
    for (let i=0; i <= jerk.healthPoints || i <= buffguy.healthPoints;  ) {
      jerk.attack(buffguy);//jerk attacks buffguy
      buffguy.attack(jerk);//buffguy attacks jerk
      if (jerk.healthPoints <= buffguy.healthPoints) {
        //sets i = healthpoints so loop keeps running
        i=jerk.healthPoints;
      } else {
        i=buffguy.healthPoints;
      } if (i <=0) {
        break; //once healthpoints reaches zero or below, exit the loop
      }

  }
  if (jerk.healthPoints > buffguy.healthPoints) {
    alert('Congrats Jerk, you won!');//if jerk's healthpoints are greater
  } else {
    alert('Congrats Buffguy, you won!');//if buffguy's healthpoints are greater
  }//resets the health score
  buffguy.healthPoints = 20;
  jerk.healthPoints = 20;
}
