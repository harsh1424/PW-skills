const calculateFinalOrderPrice = (customerCart) => {
    let finalPrice = 0
    customerCart.forEach(item => {
        finalPrice += item.unitPrice * item.quantity
    });

    return finalPrice
} 


let customerCart = [
    {unitPrice: 50, quantity: 1},
    {unitPrice: 100, quantity: 2},
    {unitPrice: 200, quantity: 10},
    {unitPrice: 25, quantity: 4}
]

let finalOrderPrice = calculateFinalOrderPrice(customerCart)
console.log(finalOrderPrice)