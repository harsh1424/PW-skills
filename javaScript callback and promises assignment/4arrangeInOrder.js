function bookTitles(bookList, callback){
    let titles = bookList.map(book => book.title)

    callback(titles)
}

let bookListObject = [
    { title: "Yellowface", author: "R.F. Kuang", year: 2023 },
    { title: "Spare", author: "Prince Harry, Duke of Sussex", year: 2023 },
    { title: "Doglapan", author: "Ashneer Grover", year:  2022 },
    { title: "Homecoming", author: "Kate Morton", year: 2023 },
]




function logSortedTitles(title){
    title.sort()
    title.forEach(element => {
        console.log(element)
    });
}

bookTitles(bookListObject, logSortedTitles)