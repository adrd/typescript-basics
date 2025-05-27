// function Pizza(name: string) {
//     this.name = name;
//     this.toppings = [];
// }

// Pizza.prototype.addTopping = function addTopping(topping: string) {
//     this.toppings.push(topping);
// }

// const pizza = new Pizza('Pepperoni');

// pizza.addTopping('pepperoni');

// console.log(pizza);  // Pizza { name: 'Pepperoni', toppings: [ 'pepperoni' ] }

////////////////////////////////////

class Pizza2 {
    name: string;
    toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza2 = new Pizza2('pepperoni');

pizza2.addTopping('pepperoni');

console.log(pizza2);    // Pizza2 { toppings: [ 'pepperoni' ], name: 'pepperoni' }