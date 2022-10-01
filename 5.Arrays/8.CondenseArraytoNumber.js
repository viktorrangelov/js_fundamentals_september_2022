function condense(givenArray) {
    let condensed = [];
    for (let currentNumber of givenArray){
        condensed.push(currentNumber);
        
    }

    while (condensed.length > 1) {
        let tempArr = [];

        for (let index = 0; index < condensed.length -1; index++) {
            tempArr[index] = condensed[index] + condensed[index +1]
            
        }
        condensed = tempArr;
    }
    console.log(condensed.join(''));
}

condense([2,10,3])