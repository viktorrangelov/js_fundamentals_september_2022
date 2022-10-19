function showSumOfOddAndEven(givenNumber) {
    let stringOfNumber = givenNumber.toString();
    let stringLength = stringOfNumber.length;
    let evenSum = 0;
    let oddSum = 0;
    for (let index = 0; index < stringLength; index++) {
       let currentDigit = Number(stringOfNumber[index]);
       if (currentDigit %2 === 0) {
        evenSum += currentDigit
       }else{
        oddSum += currentDigit;
       }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

showSumOfOddAndEven(1000435);