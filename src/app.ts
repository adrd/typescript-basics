class Sizes {
    constructor(public sizes: string[]) {}

    get availableSizes() {
        return this.sizes;
    }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

const sizes = new Sizes(['small', 'medium']);

// invoke getter
console.log(sizes.availableSizes);  // [ 'small', 'medium' ]
// invoke setter
sizes.availableSizes = ['medium', 'large'];

console.log(sizes.availableSizes);  // [ 'medium', 'large' ]

class Pizza {
    public toppings: string[] = [];

    constructor(readonly name: string) {}

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('pepperoni');

pizza.addTopping('pepperoni');