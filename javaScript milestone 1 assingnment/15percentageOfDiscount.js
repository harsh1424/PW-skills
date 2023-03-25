const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    let discout = originalPrice - discountedPrice
    let discountPercentage = (discout/originalPrice) * 100

    return discountPercentage.toFixed(2) + '%'
}

console.log(calculateDiscountPercentage(100, 90))
console.log(calculateDiscountPercentage(1250, 1025))
console.log(calculateDiscountPercentage(988, 900))