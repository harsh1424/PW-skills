const celsiusToFahrenheit = (degreeInCelsius) => {
    let degreeInFahrenheit = (degreeInCelsius * 9/5) + 32
    return degreeInFahrenheit
}

let celsius = 21.5
let fahrenheit = celsiusToFahrenheit(celsius)

console.log(fahrenheit)