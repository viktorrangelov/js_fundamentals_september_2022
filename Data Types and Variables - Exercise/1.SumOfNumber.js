function sumNumbers(number) {
    let numberTostring = number.toString();
    let stringLenght = numberTostring.length;
    let sum = 0;
    for (let index = 0; index < stringLenght; index++) {
        let currentNumber = Number(numberTostring[index]);
        sum += currentNumber;

        
    }
    console.log(sum);
}

sumNumbers(543);