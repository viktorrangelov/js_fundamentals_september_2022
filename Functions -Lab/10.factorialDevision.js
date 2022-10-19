function devision(firstNum, secondNum) {
   return(factorial(firstNum) / factorial(secondNum)).toFixed(2);

    function factorial(number) {
        let factorial = 1;
        for (let index = 1; index <= number; index++) {
            factorial *= index;
            
        }
        return factorial;
    }
}
console.log(devision(5,2));