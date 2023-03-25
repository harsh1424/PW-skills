let numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 ===0){
        continue
    }

    if (numArray[i] % 3 === 0 ){
        console.log(numArray[i])
    }
    
}