function sumTheEvans(givenArray) {
    let result = 0;
    for (let index = 0; index <= givenArray.length; index++) {
        let currentNumber = Number(givenArray[index]);

        if (currentNumber % 2 == 0) {
            result += currentNumber;
        }
        
    }
    console.log(result);
}
sumTheEvans(['1','2','3','4','5','6']);