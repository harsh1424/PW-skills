function randomElementsFromArray(arr) {
    let first, second, rest, last;
    [first, second, ...rest] = arr;
    last = rest.pop();
    return [first, second, last]
}

arr = [1, 2, 3, 4, 5];

console.log(randomElementsFromArray(arr))
