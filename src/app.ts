// function sumOrder(price: number, quantity: number): number {
//     return price * quantity;
// }

// let sumOrder: Function;

// sumOrder = (price: number, quantity: number): number => {
//     return price * quantity;
// }

let sumOrder: (price: number, quantity: number) => number // = (x, y) => x * y;

sumOrder = (x, y) => x * y;

const sum = sumOrder(25, 2);

console.log(`Total sum: ${sum}`);  // Total sum: 50