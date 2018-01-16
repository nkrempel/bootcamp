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
}
    const ninja1 = new Ninja("Hyabusa");
    // //console.log(ninja1);
    //ninja1.sayName();
    // // // -> "My ninja name is Hyabusa!"
    //ninja1.drinkSake();  
    //ninja1.showStats();
    // // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
  