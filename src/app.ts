const pizzas = [
    { name: 'Pepperoni', toppings: ['pepperoni']}
];

// const mappedPizzas = pizzas.map(function (pizza) {
//     return pizza.name.toUpperCase();
// });

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);  // [ 'PEPPERONI' ]

const pizza = {
    name: 'Blazing Inferno',
    getName: function() {
        console.log(this);  // { name: 'Blazing Inferno', getName: [Function: getName] }
        return 'Abba';
    }
};

console.log(pizza.getName());  // Abba

// const pizza = {
//     name: 'Blazing Inferno',
//     getName: function() {
//         const self = this;
//         setTimeout(function() {
//             console.log(self);  // { name: 'Blazing Inferno', getName: [Function: getName] }
//         }, 100);
//     }
// };

// console.log(pizza.getName()); // undefined

// const pizza = {
//     name: 'Blazing Inferno',
//     getName: () => pizza.name
// };

// console.log(pizza.getName());  // Blazing Inferno

