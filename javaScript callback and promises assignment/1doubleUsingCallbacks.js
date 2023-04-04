function doubleArray(arr, callback){
    let doubleArray = []
    for(let i = 0; i<arr.length; i++){
        doubleArray.push(callback(arr[i]))
    }

    return doubleArray
}


function doubleANumber(num){
    return num*2
}

let arr = [1,2,3,4,5]
console.log(doubleArray(arr, doubleANumber))