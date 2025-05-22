const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni']
};

// function order({ name, toppings }) {
//     console.log(name, toppings);  // Pepperoni [ 'pepperoni' ]
// }

// order(pizza);

// function order({ name: pizzaName, toppings: pizzaToppings }) {
//     console.log(pizzaName, pizzaToppings);  // Pepperoni [ 'pepperoni' ]
// }

// order(pizza);

function order({ name: pizzaName, toppings: pizzaToppings }) {
    return { pizzaName, pizzaToppings }
}

const { pizzaName } = order(pizza);

const toppings = ['pepperoni', 'bacon', 'chilli'];

// const firstItem = toppings[0];

const [ first, second, third ] = toppings;

console.log(first, second, third);  // pepperoni bacon chilli

function logToppings([first, second, third]: any) {
    console.log(first, second, third);  // pepperoni bacon chilli
}