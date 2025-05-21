const pizza = {
    name: 'Pepperoni',
    price: 15,
    // getName: function() {
    //     return this.name;
    // }
    getName() {
        return this.name;
    }
};

console.log(pizza.getName());  // Pepperoni

const toppings = ['pepperoni'];

// const order = { 
//     pizza: pizza, 
//     toppings: toppings
// };

// const order = { pizza, toppings};

// console.log(order);  // { pizza: { name: 'Pepperoni', price: 15 }, toppings: [ 'pepperoni' ] }

function createOrder(pizza, toppings) {
    return { pizza, toppings };
}

console.log(createOrder(pizza, toppings));  // {
                                            //   pizza: { name: 'Pepperoni', price: 15, getName: [Function: getName] },
                                            //   toppings: [ 'pepperoni' ]
                                            // }