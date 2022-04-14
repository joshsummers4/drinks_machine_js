class Drink {
    constructor(name, stepTwo, stepFour, picture){
        this.name = name;
        this.stepOne = "Boil some water";
        this.stepTwo = stepTwo;
        this.stepThree = this.pour();
        this.stepFour = stepFour;
        this.picture = picture;
    }
    pour(){
        return "Pour " + this.name + " in the cup";
    }
    instructions(){
        if (this.stepFour != ""){
            return `<li>${this.stepOne}</li> <li>${this.stepTwo}</li> <li>${this.stepThree}</li> <li>${this.stepFour}</li>`;
        } else {
            return `<li>${this.stepOne}</li> <li>${this.stepTwo}</li> <li>${this.stepThree}</li>`;
        }
    }

    pourDrink(){
        document.getElementById('drinkOutput').style.display = 'block';
        document.getElementById('drinkChoice').innerHTML = this.name;
        document.getElementById('drinkInstructions').innerHTML = this.instructions();
        document.getElementById('drinkImage').src = this.picture;
    }
}

const lemon = new Drink("Lemon Tea", "Steep the water in the tea", "Add lemon", './images/lemon.jpeg');
const coffee = new Drink("Coffee", "Brew the coffee grounds", "Add sugar and milk", './images/coffee.jpg');
const chocolate = new Drink("Chocolate", "Add drinking chocolate powder to the water", "", "./images/chocolate.jpg");


/*function pourDrink(choice){
    document.getElementById('drinkOutput').style.display = 'block';
    let drinkName = choice.name;
    let instruction = choice.instructions();
    document.getElementById('drinkChoice').innerHTML = drinkName;
    document.getElementById('drinkInstructions').innerHTML = instruction;
}*/