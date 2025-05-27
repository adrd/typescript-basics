abstract class Sizes {
    constructor(public sizes: string[]) {}

    get availableSizes() {
        return this.sizes;
    }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

class Pizza extends Sizes {
    public toppings: string[] = [];

    constructor(readonly name: string, public sizes: string[]) {
        super(sizes)
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('pepperoni', ['small', 'medium']);

pizza.addTopping('pepperoni');

console.log(pizza.availableSizes);  // [ 'small', 'medium' ]