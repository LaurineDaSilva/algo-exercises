const string = process.argv[2];
const array = string.split(",");
const numbers = [];

for (let i = 0; i < array.length; i++) {
    const candidate = array[i];
    const number = parseInt(candidate, 10)
    numbers.push(number);
}

let min = 0;
let max = numbers.length - 1;

while (min < max) {
    let tmp = numbers[max];
    numbers[max] = numbers[min];
    numbers[min] = tmp;
    min ++;
    max --;
}

console.log(numbers);