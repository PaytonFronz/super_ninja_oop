class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(`this Ninja's name is ${this.name}!`);
    }

    showStats(){
        console.log(`this Ninja's stats are...name:${this.name}, health:${this.health}, speed:${this.speed}, strength:${this.strength}!`);
    }

    drinkSake(){
        const sake = 10;
        this.health += sake;
        console.log(`${this.name} drank some sake and gained +10 to their health!`);
    }

    parentFunction(){
        return "this is coming from the parent!";
    }
}

const ninja1 = new Ninja("Ackerman", 30);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

console.log("next ninja")

const ninja2 = new Ninja("Jeager", 150, 15, 50)
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
ninja2.showStats();
ninja2.drinkSake();
ninja2.showStats();

class Sensei extends Ninja{
    constructor(name, health, speed, strength, wisdom = 10){
        super(name, health = 200, speed = 10, strength = 10, wisdom);
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;
    }

    speakWisdom(){
        const wisdom = super.drinkSake();
        console.log("I am bestowing my wisdom to you!")
    }

    childFunction(){
        const message = super.parentFunction();
        console.log(message);
    }

}
const superSensei = new Sensei("Petra")
superSensei.childFunction();
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();
