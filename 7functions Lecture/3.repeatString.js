function repearString(stringToRepeat,numberOfRepeats) {
   let newString = '';
    for (let index = 0; index < numberOfRepeats; index++) {
       newString+=stringToRepeat;
        
    }
    return newString;
}
let result = repearString('abv',3);
console.log(result);