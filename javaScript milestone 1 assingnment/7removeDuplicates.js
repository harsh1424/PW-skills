let cartItems = ['iphone', 'camera', 'pant','samsung', 'shirt', 'glasses', 'samsung','pant', 'iphone']

let uniqueCartItems = []
for (let i = 0; i < cartItems.length; i++) {
    if (uniqueCartItems.indexOf(cartItems[i]) === -1) {
        uniqueCartItems.push(cartItems[i])
    }
    
}

console.log(uniqueCartItems)