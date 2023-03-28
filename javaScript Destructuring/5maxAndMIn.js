function maxAndMin(arr){
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    return{max: max, min:min}
}


arr = [1,3,4,5,6,8,4]
console.log(maxAndMin(arr))