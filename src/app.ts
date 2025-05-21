// function sumAll(arr) {
//     return arr.reduce((prev, next) => prev + next);
// }

// const sum = sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function sumAll(message, ...arr) {
    console.log(arguments);  // { 
                             //  '0': 'Hello!',
                             //  '1': 1,
                             //  '2': 2,
                             //  '3': 3,
                             //  '4': 4,
                             //  '5': 5,
                             //  '6': 6,
                             //  '7': 7,
                             //  '8': 8,
                             //  '9': 9,
                             //  '10': 10
                             // }
    console.log(arguments[0]);  // Hello!
    console.log(message);       // Hello!
    return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('Hello!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum);  // 55