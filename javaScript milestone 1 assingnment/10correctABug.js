let cartItems = [1, 2, 3, 4, 5, 4, 3, 2, 1]

function doubleCartItems(cartItemsArray){
    for (let i = 0; i < cartItemsArray.length; i++) {
        cartItemsArray[i] = cartItemsArray[i]*2
    
        
    }

    return cartItemsArray
}

console.log(doubleCartItems(cartItems))

