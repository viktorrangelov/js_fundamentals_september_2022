function isItPerfect(number) {
    let sum = 0;
    let splitersArr = [];
    for (let index = 1; index < number; index++) {
        if (number % index == 0) {
            splitersArr.push(index);
        }
        
    }

    for (let index = 0; index < splitersArr.length; index++) {
        let currentInt = splitersArr[index];
        sum+= currentInt;
        
    }
    if (sum == number) {
       console.log('We have a perfect number!'); 
    }else{
        console.log("It's not so perfect.");
    }
}

isItPerfect(1236498);