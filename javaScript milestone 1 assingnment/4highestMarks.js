let marks = [ 40, 50, 80, 70, 35]

let highestMarks = 0
for (let i = 0; i < marks.length; i++) {
    
    highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks

    
}

console.log(highestMarks)