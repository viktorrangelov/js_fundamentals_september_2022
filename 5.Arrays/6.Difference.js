function calculate(givenArray) {
    let difference = 0;
    let EvensSum = 0;
    let OddSum = 0;
    for (let index = 0; index < givenArray.length; index++) {
       let currentNumber = givenArray[index];
        
        
       if (currentNumber % 2 == 0) {
        EvensSum += currentNumber;
       }else{
        OddSum += currentNumber;
       }
       
    }
    difference = EvensSum - OddSum;
    console.log(difference);
}
calculate([3,5,7,9]);