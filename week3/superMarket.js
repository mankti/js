function addToShoppingCart(item){
    items.push(item);
    if (items.length > 3) {
        items.shift();
    }
    console.log(`You bought ${items}`)
}


let items = ['bananas', 'milk'];
let item = ['apples', 'cereal', 'bread'];

for (let i of item) {
    addToShoppingCart(i);
}