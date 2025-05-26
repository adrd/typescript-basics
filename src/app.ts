let coupon: string | null = 'pizza25';

function removeCoupon(): void {
    coupon = null;
}

console.log(coupon);  // pizza25

removeCoupon();

console.log(coupon);  // null