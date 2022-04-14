class Drink {
    constructor(name, stepTwo, stepFour){
        this.name = name;
        this.stepOne = "Boil some water";
        this.stepTwo = stepTwo;
        this.stepThree = this.pour();
        this.stepFour = stepFour;
    }
    pour(){
        return "Pour " + this.name + " in the cup";
    }
    instructions(){
        return `${this.stepOne} \n${this.stepTwo} \n${this.stepThree} \n${this.stepFour}`;
    }
}

const lemon = new Drink("Lemon Tea", "Steep the water in the tea", "Add lemon");
const coffee = new Drink("Coffee", "Brew the coffee grounds", "Add sugar and milk");
const chocolate = new Drink("Chocolate", "Add drinking chocolate powder to the water", "");


function pourDrink(choice){
    document.getElementById('drinkOutput').style.display = 'block';
    let drinkName = choice.name;
    let instruction = choice.instructions();
    document.getElementById('drinkChoice').innerHTML = drinkName;
    document.getElementById('drinkInstructions').innerHTML = instruction;
}