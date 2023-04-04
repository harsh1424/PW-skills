function ageInDays(obj){
    let fullName = obj.firstName + " " + obj.lastName
    let ageInDays = obj.age * 365

    return () => {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}`)
    }
}

let person = {
    firstName : 'Pw',
    lastName : 'skills',
    age: 5
}

let logResult = ageInDays(person)
logResult()