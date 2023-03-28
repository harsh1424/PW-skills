const countTheOccurrences = (str) => {
    let wordCountMap = new Map()

    let words = str.split(" ")

    for (let index = 0; index < words.length; index++) {
        let count = 0
        if (wordCountMap.has(words[index])){
            console.log("inside if")
            count = wordCountMap.get(words[index])
        }
        wordCountMap.set(words[index], count + 1)
    }
    return wordCountMap
}

let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

let str2 = 'pw pw skills skills web development html css js node html css js'

console.log(countTheOccurrences(str))
console.log(countTheOccurrences(str2))

