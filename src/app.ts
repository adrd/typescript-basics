abstract class Sizes {
    constructor(protected sizes: string[]) {}

    get availableSizes() {
        return this.sizes;
    }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

class Pizza extends Sizes {
    public toppings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        super(sizes)
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

const pizza = new Pizza('pepperoni', ['small', 'medium']);

console.log(pizza.availableSizes);  // [ 'small', 'medium' ]

pizza.updateSizes(['large']);

console.log(pizza.availableSizes);  // [ 'large' ]