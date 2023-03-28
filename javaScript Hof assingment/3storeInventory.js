const pricesInUSD = {
    item1: 10,
    item2: 20,
    item3: 30,
  };
  
  const exchangeRate = 80;
  
  const pricesInInr = {};
  
  Object.entries(pricesInUSD).map(([item, price]) => {
    pricesInInr[item] = price * exchangeRate;
  });
  
  console.log(pricesInInr);

  