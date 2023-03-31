class Car{
    constructor(year, company, model){
        this.company = company
        this.model = model
        this.year = year
    }

    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model} `
    }
}

const carObj = new Car(2022, "Skoda", "Rapid")
console.log(carObj.getDescription())