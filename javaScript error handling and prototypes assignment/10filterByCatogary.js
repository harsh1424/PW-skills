function filterByCatogary(arrOfProducts){
    return function(catogary){
        return arrOfProducts.filter(product => product.catogary === catogary)
    }
}

let products = [
    {name: 'Shirts', catogary: 'Clothings'},
    {name: 'Pants', catogary: 'Clothings'},
    {name: 'Hats', catogary: 'Accessories'},
    {name: 'Sunglasses', catogary: 'Accessories'},
]

let clothingProducts = filterByCatogary(products)('Clothings')

console.log(clothingProducts)