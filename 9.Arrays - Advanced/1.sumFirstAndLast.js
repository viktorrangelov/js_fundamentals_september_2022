function sum(myArray) {
    let first = Number(myArray.shift());
    let last = Number(myArray.pop());
    let sum = first + last;
    return sum;
}

sum(['20', '30', '40']);