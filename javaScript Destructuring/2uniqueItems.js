function unqueItem(arr){
    let set = new Set([...arr])
    return set
}

let arr = [1,2,3,4,5,3,3,2,1]

console.log(unqueItem(arr))