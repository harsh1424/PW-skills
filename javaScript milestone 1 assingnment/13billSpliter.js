function calculateBill(dishCosts, numPeople) {
    let totalBill = dishCosts.reduce((acc, curr) => acc + curr, 0);
    let billPerPerson = totalBill / numPeople;
    return {
      totalBill,
      billPerPerson
    };
  }
  
  
  let dishCosts = [10, 15, 20];
  let numPeople = 4;
  let bill = calculateBill(dishCosts, numPeople);
  console.log("Bill Per Person: ", bill.billPerPerson);
  console.log("Total Bill: ", bill.totalBill) 
  