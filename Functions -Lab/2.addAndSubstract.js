function addAndSubstract(numOne,numTwo,numThree) {
    function add(firstNum, secondNum) {
        sum = firstNum + secondNum;
        return sum;
    }

    let result = add(numOne,numTwo) - numThree;
    console.log(result);
}

addAndSubstract(23,6,10);