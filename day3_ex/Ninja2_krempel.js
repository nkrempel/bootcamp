function Ninja(name){
    this.speed = 3;
    this.strength = 3;
    this.name = name;
    this.health = 100;

    this.drinkSake = function(){
        this.health += 10;
        console.log("You drank sake.");
    }
    this.sayName = function (){
        console.log("\"My ninja name is " + this.name + "!\"");
    }
    this.showStats = function(){
        console.log("\"Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength + "\"" )
    }
    this.punch = function(ninja){
        if(ninja instanceof Ninja){      
            console.log("\"" + ninja.name + " was punched by " + this.name + " and lost 5 health!");
            ninja.health -= 5;
            console.log("\"" + ninja.name + "'s health is now " + ninja.health);
        }
        else console.log("You are no Ninja!")
    }
    this.kick = function(ninja){
        if(ninja instanceof Ninja){
            let kickDmg = this.strength * 15;
            console.log("\"" + ninja.name + " was kicked by " + this.name + " and lost " + kickDmg + " health!")
            ninja.health -= kickDmg;
            console.log("\"" + ninja.name + "'s health is now " + ninja.health);
        }
        else console.log("You are no Ninja!")
    }
}
    //const ninja1 = new Ninja("Hyabusa");
    // //console.log(ninja1);
    //ninja1.sayName();
    // // // -> "My ninja name is Hyabusa!"
    //ninja1.drinkSake();  
    //ninja1.showStats();
    // // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
    const blueNinja = new Ninja("Goemon");
    const redNinja = new Ninja("Bill Gates");
    //redNinja.punch(blueNinja);
    blueNinja.kick(redNinja);