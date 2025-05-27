const date = new Date();
console.log(date);   // 2025-05-27T11:06:24.571Z

const date1 = +new Date();
console.log(date1);  // 1748343984577

class Coupon {
    static allowed = ['Pepperoni', 'Blazing Inferno'];
    static create(percentage: number) {
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}

console.log(Coupon.allowed);     // [ 'Pepperoni', 'Blazing Inferno' ]
console.log(Coupon.create(25));  // PIZZA_RESTAURANT_25