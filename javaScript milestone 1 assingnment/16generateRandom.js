const generateRandomNumber = (() => {
    let min = 1
    let max = 100
    console.log( Math.floor(Math.random() * max) + min);
})();