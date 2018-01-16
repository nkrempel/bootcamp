class Ninja{
    constructor(name){
        this.name = name;
        this.speed = 3;
        this.strength = 3;
        this.health = 100;
    }
    drinkSake(){
        this.health += 10;
        console.log("You drank sake.");
    }
    showStats(){
        //console.log("\"Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength + "\"" )
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    sayName(){
        console.log(`My ninja name is ${this.name}!`);
    }
}
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
        this.health = 200;
    }
    speakWisdom(){
        super.drinkSake();
        console.log(`Confucius say: Choose a job you love, and you will never work a day in your life.`)
    }
}


    const ninja1 = new Ninja("Hyabusa");
    // // //console.log(ninja1);
    ninja1.sayName();
    // // // // -> "My ninja name is Hyabusa!"
    ninja1.drinkSake();  
    ninja1.showStats();
    // // // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
    // // example output
    const superSensei = new Sensei("Master Splinter");
    superSensei.speakWisdom();
    // -> "What one programmer can do in one month, two programmers can do in two months."
    superSensei.showStats();
    // -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
