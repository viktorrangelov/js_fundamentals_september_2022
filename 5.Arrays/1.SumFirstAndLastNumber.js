function sum(numbers) {
   
    let firstNumber = numbers[0];
    let lastNumber = numbers[numbers.length -1];
    let result = firstNumber + lastNumber;
    console.log(result);
}

sum([20, 30, 40])