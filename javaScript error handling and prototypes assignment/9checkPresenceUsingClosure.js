function numberChecker(arr){
    return function(num){
        for (let i = 0; i < arr.length; i++) {
            if (num == arr[i]){
                return true
            }
            
        }
        return false
    }
}

const arr = [1,2,3,4,5]
const checkNum = numberChecker(arr)

console.log(checkNum(3))
console.log(checkNum(8))