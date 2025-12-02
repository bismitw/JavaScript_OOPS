let car ={
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function(){
        return `${this.make} car got started in ${this.year}`;
    },
}
// console.log(car.start());


function Person(name, age){
    this.name= name
    this.age=age
}

let Bismit = new Person("Bismit", 20)

// console.log(Bismit);

// Prototypal chain

function Animal(type){
    this.type= type
}
Animal.prototype.speak = function(){

    return `${this.type} makes a sound`
}

Array.prototype.Bismit = function(){
    return `Custom Method ${this}`
}

let myArray = [1,2,3]
// console.log(myArray.Bismit());

let myNewArray = [1, 2, 3,4,5,6];
// console.log(myArray.Bismit());

class Vehicle{
        constructor(make,model){
            this.make = make
            this.model= model
        }

        start(){
            return `${this.model} is a car from ${this.make}`
        }
}

class Car extends Vehicle{
    drive(){
        return`${this.make} : This is an Inheritance example`;
    }
}

let myCar = new Car("Toyota", "Corolla")
// console.log(myCar.start());
// console.log(myCar.drive());


let vehOne = new Vehicle("Toyota", "Corolla");

// console.log(vehOne.make);

// Encapsulation
// restricts the direct access to the object data

class BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance +=amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
// console.log(account.getBalance());

// Abstraction

class CoffeMachine{

    start(){
        //call DB
        // filter value 
        return `Starting the machine....`;
    }

    brewCoffee(){
        //complex calculation

        return `Brewing coffee`;
    }

    pressStartButton(){
        let msgOne= this.start();
        let msgTwo= this.brewCoffee();
        return`${msgOne} +  ${msgTwo}`;
    }
}

let myMachine= new CoffeMachine()
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

//Polymorphism

class Bird{

    fly(){

        return` Flying...`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins Can't Fly`;
    }
}

let bird = new Bird()
let penguin = new Penguin()

// console.log(bird.fly());
// console.log(penguin.fly());






