function isOdd(number) {
    return number % 2 !== 0;
}

function printOddNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (isOdd(i)) {
            console.log(i);
        }
    }
}

let limit = 21;
console.log("The odd numbers from 0 to", limit, "are:");
printOddNumbers(limit);