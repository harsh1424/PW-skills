function manipulateString(str){
    let uppercaseStr = str.toUpperCase()

    return () => {
        console.log(`The manipulated string is: ${uppercaseStr}`)
    }
}

let str = 'hellow world!'


let logstr = manipulateString(str)

logstr()



