let delay = 3000;
let countdown = delay/1000;

let timer = setInterval(() => {
    console.log("Time remaining to generate a random number : ", countdown, "seconds")
    countdown--;
}, 1000)

setTimeout(() =>{
    clearInterval(timer)
    randomNumber = Math.floor(Math.random() * 100 ) + 1;
    console.log("random Number generated : ", randomNumber)
    
}, delay)
