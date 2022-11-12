// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength;
    }
    receiveDamage (damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    } 
    battleCry () {
        return `Odin Owns You All!`;
    } 
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    crossedAttack(attackersArr, defendersArr) {
        const randomAttackerIdx = Math.floor(Math.random()*attackersArr.length);
        const randomDefenderIdx = Math.floor(Math.random()*defendersArr.length);
        const outputMsg = defendersArr[randomDefenderIdx].receiveDamage(attackersArr[randomAttackerIdx].strength);
        if (defendersArr[randomDefenderIdx].health <= 0) {
            defendersArr.splice(randomDefenderIdx);
        }
        return outputMsg;
    }
    vikingAttack() {
        return this.crossedAttack(this.vikingArmy,this.saxonArmy);
        /*
        const randomSaxonIdx = Math.floor(Math.random()*this.saxonArmy.length);
        const randomVikingIdx = Math.floor(Math.random()*this.vikingArmy.length);
        const outputMsg = this.saxonArmy[randomSaxonIdx].receiveDamage(this.vikingArmy[randomVikingIdx].strength);
        if (this.saxonArmy[randomSaxonIdx].health <= 0) {
            this.saxonArmy.splice(randomSaxonIdx,1);
        }
        return outputMsg;
        */
    }
    saxonAttack() {
        return this.crossedAttack(this.saxonArmy, this.vikingArmy);
        /*
        const randomSaxonIdx = Math.floor(Math.random()*this.saxonArmy.length);
        const randomVikingIdx = Math.floor(Math.random()*this.vikingArmy.length);
        const outputMsg = this.vikingArmy[randomVikingIdx].receiveDamage(this.saxonArmy[randomSaxonIdx].strength);
        if (this.vikingArmy[randomVikingIdx].health <= 0){
            this.vikingArmy.splice(randomVikingIdx,1);
        }
        return outputMsg;
        */
    }
    showStatus() {
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";  
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
