const calculateRentalCost = (numOfDays, carType) => {
    
    let rentPerDays = 0
    if (carType === 'Economy'){
        rentPerDays = 4000
    }
    else if(carType === 'Midsize'){
        rentPerDays = 10000
    } 
    else if( carType === 'Luxury'){
        rentPerDays = 20000
    }
    else{
        return "invalid car type"
    }

    return ( rentPerDays * numOfDays)
}

console.log(calculateRentalCost(5, "Economy"))
console.log(calculateRentalCost(4, "Midsize"))
console.log(calculateRentalCost(6, "Luxury"))