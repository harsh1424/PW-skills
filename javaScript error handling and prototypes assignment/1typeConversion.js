function convertToNumber(str){
    try {
        let num = Number(str)

        if(isNaN(num)){
            throw new Error("Invalid number")
        }

        return num

    } catch (error) {
        // console.log(error)
        return "Invalid number"
    }
}

console.log(convertToNumber("1234"))
console.log(convertToNumber("abc"))