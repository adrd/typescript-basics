const toppings = ['bacon', 'chilli'];

const newToppings = ['pepperoni'];

// const allToppings = [...toppings, ...newToppings];

// console.log(allToppings);  // [ 'bacon', 'chilli', 'pepperoni' ]

const allToppings = [...newToppings, ...toppings];

console.log(allToppings);  // [ 'pepperoni', 'bacon', 'chilli' ]
