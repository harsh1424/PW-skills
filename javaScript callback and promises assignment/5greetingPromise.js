function greeting(name){
    return new Promise(function exec(resolve, reject){
        resolve(`Hellow, ${name}`)
    })
}


let namee = 'Harsh'
let greetingPromise = greeting(namee)

greetingPromise.then(function f(value){
    console.log(value)
})