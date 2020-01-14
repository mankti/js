
function calculateTotalPrice(cart) {
    totalValue = 0;
    for (let i in cart) {
        totalValue += cart[i];
    }
    console.log(`The total cost is ${totalValue.toFixed(2)}`);
}

let cartForParty = {
    beers: 1.20,
    chips: 0.85,
    rum: 15.00,
    juice: 1.05,
    plastic_cups: 0.30
}

calculateTotalPrice(cartForParty);
