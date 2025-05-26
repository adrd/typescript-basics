let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
    pizzaSize = size;
}

selectSize('medium');

console.log(`Pizza size: ${pizzaSize}`);  // Pizza size: medium

let pizzaSizeNumber: number = 1;

function selectSizeNumber(size: 1 | 2 | 3): void {
    pizzaSizeNumber = size;
}

selectSizeNumber(2);

console.log(`Pizza size: ${pizzaSizeNumber}`);  // Pizza size: 2