class Ninja {
    constructor(name){
        this.speed = 3;
        this.strength = 3;
        this.health = 0;
        this.name = name; 
        
    }
    

    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }

    drinkSake(){
        this.health += 10;
        console.log("You've earned 10 health!")
    }
    
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10; 
        this.speed = 10;
        this.wisdom = 10; 
    }

    speakWisdom(){
        const wisdom = super.drinkSake();
        console.log (`You've become more wise!  Your health is now ${this.health}`)
    }

}
const ninja1 = new Ninja("Hyabusa")
ninja1.sayName()
ninja1.drinkSake()
ninja1.showStats()

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();